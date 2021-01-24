from sklearn.datasets import fetch_20newsgroups
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn import metrics
news = fetch_20newsgroups()
print("All Targets\n", news["target_names"])
categories = ['alt.atheism', 'soc.religion.christian', 'comp.graphics', 'sci.med']
news_train = fetch_20newsgroups(subset='train', categories=categories, shuffle='true')
news_test = fetch_20newsgroups(subset='test', categories=categories, shuffle='true')
print("Target Names", news_train.target_names)
text_clf = Pipeline([('vect', TfidfVectorizer()), ('clf', MultinomialNB())])
text_clf.fit(news_train.data, news_train.target)
predicted = text_clf.predict(news_test.data)
print("Accuracy", metrics.accuracy_score(news_test.target, predicted))
print(metrics.classification_report(news_test.target, predicted, target_names=news_test.target_names))
print("Confusion Matrix:\n", metrics.confusion_matrix(news_test.target, predicted))
