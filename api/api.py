#!/usr/bin/python3

'''
api.py

Author: Conrad Heidebrecht,  19 June 2017,  v. 0.1
'''

import smtplib, re
from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)


class EmailSender(Resource):

    def __init__(self):
        self.addr_pattern = re.compile('[^@]+@[^@]+\.[^@]+')

    def send_email(self, fname, femail, tname, temail, subject, message):
        email = '''From: %s <%s>
        To: %s <%s>
        Subject: %s

        %s        
        ''' % (fname, femail, tname, temail, subject, message)

        try:
            if not self.addr_pattern.match(femail) and not self.addr_pattern.match(temail):
                raise TypeError
            smtp = smtplib.SMTP('localhost')
            smtp.sendmail(femail, [temail], email)
            print('Your email has been sent. Thanks!')
            return 'success'
        except TypeError:
            print('Please check that your email address is valid.')
            return 'email_invalid'
        except:
            print('Your email has failed to send. Please check your information.')
            return 'failure'

    def get(self, fname, femail, tname, temail, subject, message):
        return self.send_email(fname, femail, tname, temail, subject, message)


api.add_resource(
    EmailSender,
    '/api/sendemail/fname=<fname>&femail=<femail>&tname=<tname>&temail=<temail>&subject=<subject>&message=<message>'
)

if __name__ == '__main__':
    app.run()
