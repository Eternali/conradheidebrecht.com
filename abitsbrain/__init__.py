#!/usr/bin/python3

'''
__init__.py

Author: Conrad Heidebrecht    30 September 2017    v. 0.0.1
'''

from flask import Flask, jsonify, render_template, request
import smtplib, re

app = Flask(__name__)
emailpattern = re.compile('[^@]+@[^@]+\.[^@]+')

@app.route('/')
def root ():
    return render_template('index.html')

@app.route('/send_email', methods=['POST'])
def send_email ():

    email = """From: %s <%s>\nTo: Conrad Heidebrecht <%s>\nSubject: %s\n\n%s\n""" % (request.form['name'],
            request.form['email'], request.form['selfemail'], request.form['subject'], request.form['message'])

    try:
        if not emailpattern.match(request.form['email']):
            raise TypeError
        smtp = smtplib.SMTP('localhost')
        smtp.sendmail(request.form['email'], [request.form['selfemail']], email)
        return jsonify(success='Your message has been sent, thanks!')
    except:
        return jsonify(success='Your message has failed to send, please check your information.')

if __name__ == '__main__':
    app.run() #app.run(ssl_context=('/etc/letsencrypt/live/fullchain.pem', '/etc/letsencrypt/live/privkey.pem'))
