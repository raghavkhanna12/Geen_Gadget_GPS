import pandas as pd
import sys


print("ehhhh")
# Load the data
df = pd.read_csv('output.csv')



X = df[['MOB']]  # Features
y = df['PCB']       # Target variable





from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)


import pickle
with open('mobile.pkl', 'wb') as file:
    pickle.dump(model, file)