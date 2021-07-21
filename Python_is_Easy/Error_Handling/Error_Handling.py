
# float("123.4") -> 123.4
# float("N/A") -> error

keyword = "Hello"

try:
    raise NameError("Error")

except ValueError:
    print("Got a ValueError")

except Exception as e:
    print("Other type of exception")
    print(str(e))

finally:
    print("finally")

print("Past exception")