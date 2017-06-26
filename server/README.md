# Twitter API REST server

### Prerequisites

You need python and the virtualenv package to run this server. See also: [http://flask.pocoo.org/docs/0.12/installation/#virtualenv](http://flask.pocoo.org/docs/0.12/installation/#virtualenv)

# One time setup

## Set environmental variables
The `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET`, `TWITTER_ACCESS_TOKEN`, and `TWITTER_ACCESS_TOKEN_SECRET` environmental variables need to be set. A convenience shell script template has been created at `set-env.bash.template` to help you set the variables. Copy this file to `set-env.bash` and put add the values there. `set-env.bash` is ignored by git so you do not have to worry about leaking the credentials to version control. The values for each of the variables can be found at your respective application's page at [https://apps.twitter.com/](https://apps.twitter.com/). Once `set-env.bash` has the correct values run `. set-env.bash` from the command line to set them for the current shell and all processes started from current shell.

## Set up virtual environment
`./bin/setup`

# Start your day
 `. env/bin/activate`

# Run the server
`python app.py`

# Done for the day
When you are done developing:

`deactivate`
