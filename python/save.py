# # import ctypes  # An included library with Python install.   
# # ctypes.windll.user32.MessageBoxW(0, "Your text", "Your title", 1)

# print('Hello python world')

# with open('output.txt', 'w') as file:  # Use file to refer to the file object
#     file.write('Hi there!')
with open ("../js/app.js", "r") as myfile:
    data=myfile.read()
with open('output.txt', 'w') as file:  # Use file to refer to the file object

    file.write(str(data))