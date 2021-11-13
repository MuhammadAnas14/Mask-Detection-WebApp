from flask import Flask, request, render_template,jsonify
app = Flask(__name__)
import json
import numpy as np
from pymongo import MongoClient
from flask_cors import CORS
CORS(app)


@app.route("/", methods=["GET"])
def Gettingstarted():
    data= "hi"
    print("all ok")
    return data

