import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import numpy as np
import eel
from dotenv import load_dotenv
import os

eel.init('web')

load_dotenv() 

my_python_key = os.getenv('API_KEY')



@eel.expose
def retrieve_key():
    eel.set_key(my_python_key)
    print("retrieve key worked")


@eel.expose
def recommend(user_state, user_sat, user_size, school_type):
    """Takes in user input and creates a decision tree as a result of that input"""
    translated_sat = 0
    translated_size = 0
    df = pd.read_csv('/Users/hunterpeterson/Desktop/Most-Recent-Cohorts-All-Data-Elements.csv',
                     usecols=["STABBR", "SAT_AVG", "UGDS", "INSTNM"])
    df.dropna(subset=["STABBR"], axis=0, inplace=True)
    final_df = pd.DataFrame(columns=df.columns)
    userinput = user_state
    for i in range(0, len(df)):
        if df.iloc[i]['STABBR'] == userinput:
            final_df = final_df.append(df.iloc[i])
    final_df["SAT_AVG"] = final_df["SAT_AVG"].fillna(
        final_df["SAT_AVG"].mean())
    final_df["UGDS"] = final_df["UGDS"].fillna(final_df["UGDS"].mean())
    try: 
        sat_bins = np.linspace(
        min(final_df["SAT_AVG"]), max(final_df["SAT_AVG"]), 7)
        sat_group_names = [0, 1, 2, 3, 4, 5]
        final_df["SAT_BINNED"] = pd.cut(
        final_df["SAT_AVG"], sat_bins, labels=sat_group_names, include_lowest=True)
    except ValueError: 
        final_df["SAT_BINNED"] = final_df["SAT_AVG"].mean()
    try:
        size_bins = np.linspace(min(final_df["UGDS"]), max(final_df["UGDS"]), 7)
        size_group_names = [0, 1, 2, 3, 4, 5]
        final_df["UGDS_BINNED"] = pd.cut(
        final_df["UGDS"], size_bins, labels=size_group_names, include_lowest=True)
    except ValueError:
        final_df["UGDS"].mean()

    features = ['SAT_BINNED', 'UGDS_BINNED']
    X = final_df[features]
    y = final_df['INSTNM']

    dtree = DecisionTreeClassifier()
    dtree = dtree.fit(X, y)
    user_sat = int(user_sat)

    if user_sat < 915:
        translated_sat = 0
    elif user_sat < 1045:
        translated_sat = 1
    elif user_sat < 1175:
        translated_sat = 2
    elif user_sat < 1305:
        translated_sat = 3
    elif user_sat < 1435:
        translated_sat = 4
    else:
        translated_sat = 5

    if user_size == "Very Small":
        translated_size = 0
    elif user_size < "Small":
        translated_size = 1
    elif user_size < "Average":
        translated_size = 2
    elif user_size < "Large":
        translated_size = 3
    else:
        translated_size = 5

    if school_type == "Safety" and translated_sat > 0:
        translated_sat -= 1
    elif school_type == "Safety" and translated_size < 5:
        translated_size += 1
    elif school_type == "Safety":
        translated_size -= 1
    elif school_type == "Reach" and translated_sat < 5:
        translated_sat += 1
    elif school_type == "Reach" and translated_size < 5:
        translated_size += 1
    elif school_type == "Reach":
        translated_size -= 1

    predictions = dtree.predict([[translated_sat, translated_size]])
    predict_string = np.array2string(predictions)
    print(predict_string)
    eel.take_prediction(predict_string, school_type)


eel.start('index.html')


#while True:
    #eel.sleep(10)
