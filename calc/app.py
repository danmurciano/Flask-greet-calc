from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

ops = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}


@app.route("/math/<op>")
def math(op):
    a = int(request.args["a"])
    b = int(request.args["b"])

    result = ops[op](a, b)

    return str(result)
