from flask import Flask, jsonify, request
from scrape import scrapYoutube

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def home():
  if (request.method == "GET"):
    data = "hello world"
    return jsonify({'data': data})
  
if __name__ == '__main__':
  app.run(debug=True, port=5000)