#! /usr/bin/env python
import os
import json
import urllib
from TwitterAPI import TwitterAPI
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

CONSUMER_KEY = os.environ['TWITTER_CONSUMER_KEY']
CONSUMER_SECRET = os.environ['TWITTER_CONSUMER_SECRET']
ACCESS_TOKEN = os.environ['TWITTER_ACCESS_TOKEN']
ACCESS_TOKEN_SECRET = os.environ['TWITTER_ACCESS_TOKEN_SECRET']

api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET,
                 ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/search', methods=['POST'])
@cross_origin()
def search():
    username = request.form['username']
    searchTerm = request.form['searchTerm']
    count = request.form['count']
    q = '@' + username + ' ' + searchTerm
    q = urllib.quote_plus(q.encode('utf-8'))
    r = api.request('search/tweets', {'q': q, 'count': count})
    return Response(json.dumps(r.json()), mimetype = 'application/json')

@app.route('/test', methods=['GET'])
@cross_origin()
def test():
    with open('test/big-boi-02.json') as json_file:
        json_data = json.load(json_file)
        return Response(json.dumps(json_data), mimetype = 'application/json')

if __name__ == '__main__':
    app.run(debug=True)
