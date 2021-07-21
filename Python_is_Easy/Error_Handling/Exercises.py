value="John Doe"
try:
    raise ValueError
except Exception as e:
    print("exception")
except ValueError:
    print("Value Error")