# -*- coding: utf-8 -*-
"""Mock_Practical.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/18Yguyd8yB4zmm8TChJBy22YcHLmTvZDj
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

"""# Pandas 
1.  read_csv()
2.  head()
3.  tail()
4.  isnull()
5.  sum()
6.  describe()


"""

df = pd.read_csv('Real estate.csv')

df.head()

df.tail()

df.isnull().sum()

df.describe()

"""# Numpy
1.   argmax()
2.   sort()
3.   median()
4.   mean()
5.   average()
6.   std()
"""

np.argmax(df['No'])

a=df['X1 transaction date']
np.sort(a)
print(a.head(10))
print(a.tail(10))

print('Median of a is :',np.median(a))
print('Mean of a is :',np.mean(a))
print('Average of a is :',np.average(a))
print('Standard Deviation of a is :',np.std(a))

"""# scikitlearn
1.   train_test_split
2.   LinearRegression()
3.   r2_score()
4.   fit()
5.   predict()


"""

X=df.drop(['Y house price of unit area'], axis=1)
y=df['Y house price of unit area']

X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8, random_state=42)

X_test.shape

X_train.shape

reg = LinearRegression()
reg.fit(X_train, y_train)

y_pred = reg.predict(X_test)

reg.coef_

reg.intercept_

r2_score(y_test, y_pred)

"""# Matplotlib
1.   bar()
2.   pie()
3.   plot()
4.   show()
5.   scatter()


"""

x = np.array(["A", "B", "C", "D"])
y = np.array([3, 8, 1, 10])

plt.bar(x,y)
plt.show()

y = np.array([35, 25, 25, 15])

plt.pie(y)
plt.show()

xpoints = np.array([0, 6])
ypoints = np.array([0, 250])

plt.plot(xpoints, ypoints)
plt.show()

x = np.array([5,7,8,7,2,17,2,9,4,11,12,9,6])
y = np.array([99,86,87,88,111,86,103,87,94,78,77,85,86])

plt.scatter(x, y)
plt.show()