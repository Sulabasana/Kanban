with open ("output.txt", "r") as myfile:
    data=myfile.read()
with open('Hello.js', 'w') as file:  # Use file to refer to the file object

    file.write(str(data))