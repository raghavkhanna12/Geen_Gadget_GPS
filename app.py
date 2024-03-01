from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import sklearn
import os
import pickle
import warnings
import math
import json
prices={"gold":6.800,"silver":.073,"palladium":3.380,"platinum":2.400,"copper":0.00074}

app = Flask(__name__)

loaded_model = pickle.load(open("mobile.pkl", 'rb'))


@app.route('/')
def home():
    return render_template('home.html')


# @app.route('/predict', methods=['POST'])
# def predict():
#     tip = float(request.form['tip'])
#     print(tip)


#     feature_list = [[tip]]
#     single_pred = np.array(feature_list).reshape(1, -1)

#     prediction = loaded_model.predict(single_pred)
#     print(prediction)


@app.route('/predict', methods=['POST'])

@app.route('/predict', methods=['POST'])
def predict():
    tip = float(request.form['tip'])
    prediction = loaded_model.predict([[tip]])
    gold = int(prediction) * 0.0003 * 1000
    silver = int(prediction) * 0.001 * 1000
    palladium = int(prediction) * 0.0002 * 1000
    platinum = int(prediction) * 0.0001 * 1000
    copper = int(prediction) * 0.40 * 1000

    gold1 = math.ceil(gold * prices.get("gold") / 2)
    silver1 = math.ceil((silver * prices.get("silver") / 5))
    palladium1 = math.ceil((palladium * prices.get("palladium") / 5))
    platinum1 = math.ceil((platinum * prices.get("platinum") / 5))
    copper1 = math.ceil((copper * prices.get("copper") / 5))
    total_credit_points = (gold1 + silver1 + palladium1 + platinum1 + copper1)

    response_message = f"<div style='font-size: 20px;'><strong>Credit Score:</strong> {int(total_credit_points)}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Gold:</strong> {gold}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Silver:</strong> {silver}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Copper:</strong> {copper}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Palladium:</strong> {palladium}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Platinum:</strong> {platinum}</div>"
    response_message += f"<div style='font-size: 20px;'><strong>Credit Score:</strong> {int(total_credit_points)}</div>"

    return response_message




if __name__ == '__main__':
    app.run(debug=True)