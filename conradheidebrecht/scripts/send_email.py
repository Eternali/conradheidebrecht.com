#!/usr/bin/python3

'''
send_email.py from_name from_email to_email subject body_text

Author: Conrad Heidebrecht 21 October 2017    v. 0.0.1
'''

import smtplib, re
from sys import argv

emailpattern = re.compile('[^@]+@[^@]+\.[^@]+')

email = """From: %s <%s>\nTo: Conrad Heidebrecht <%s>\nSubject: %s\n\n%s\n""" % (argv[1], argv[2], 
                                                                                argv[3], argv[4], argv[5])

try:
    if not emailpattern.match(argv[2]):
        raise TypeError
    smtp = smtplib.SMTP('localhost')
    smtp.sendmail(argv[2], [argv[3]], email)
except:
    raise EnvironmentError 

