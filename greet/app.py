from flask import Flask
app = Flask(__name__)


@app.route('/welcome')
def welcome():
    return "Welcome"

@app.route("/welcome/<type>")
def specific_welcome(type):
    return f"Welcome {type}"
