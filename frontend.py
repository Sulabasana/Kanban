import tkinter as tk
from tkinter import *
#from back import Database

widthList=0.33
heightlist=0.5

widthLabels = 0.1
heightLabels = 0.02

heightButtons = 0.05 

root = tk.Tk()

root.wm_title("Kanban")

canvas = tk.Canvas(root, height=700,width=700, bg="#263400")
canvas.pack()
#Labels
l1=Label(root, text="To Do")
l1.place(relwidth=widthList, relheight=heightLabels, relx=0, rely=0)

l2=Label(root, text="In Progress")
l2.place(relwidth=widthList, relheight=heightLabels, relx=0.34, rely=0)

l3=Label(root, text="Done")
l3.place(relwidth=widthList, relheight=heightLabels, relx=0.68, rely=0)

l4=Label(root, text="Task")
l4.place(relwidth=widthLabels, relheight=heightLabels, relx=0, rely=0.56)

l5=Label(root, text="Status")
l5.place(relwidth=widthLabels, relheight=heightLabels, relx=0.2, rely=0.56)

l6=Label(root, text="Severity")
l6.place(relwidth=widthLabels, relheight=heightLabels, relx=0.4, rely=0.56)

l7=Label(root, text="Tags")
l7.place(relwidth=widthLabels, relheight=heightLabels, relx=0.6, rely=0.56)


#LISTS
list1=Listbox(root)
list1.place(relwidth=widthList, relheight=heightlist, relx=0, rely=0.02)

list2=Listbox(root)
list2.place(relwidth=widthList, relheight=heightlist, relx=0.34, rely=0.02)

list3=Listbox(root)
list3.place(relwidth=widthList, relheight=heightlist, relx=0.68, rely=0.02)

#Fields
e4=Entry(root)
e4.place(relwidth=0.2, relheight=0.04, relx=0, rely=0.58)

e5=Entry(root)
e5.place(relwidth=0.2, relheight=0.04, relx=0.2, rely=0.58)

e6=Entry(root)
e6.place(relwidth=0.2, relheight=0.04, relx=0.4, rely=0.58)

e7=Entry(root)
e7.place(relwidth=0.2, relheight=0.04, relx=0.6, rely=0.58)


#Buttons
b1=Button(root,text="Add entry")
b1.place(relwidth=widthLabels, relheight=heightButtons, relx=0.85, rely=0.55)

b2=Button(root,text="Update entry")
b2.place(relwidth=widthLabels, relheight=heightButtons, relx=0.85, rely=0.6)

b3=Button(root,text="Delete entry")
b3.place(relwidth=widthLabels, relheight=heightButtons, relx=0.85, rely=0.65)


# b2=Button(window,text="Delete entry", width=14, command=delete_command)
# b2.place(row=4, column=3)

# b3=Button(window,text="Update entry", width=14,command=update_command)
# b3.place(row=1,column=4)

# l1=Label(root, text="To Do")
# l1.grid(row=0,column=0,columnspan=2)

# l2=Label(root, text="In Progress")
# l2.grid(row=0, column=2,columnspan=2)

# l3=Label(root, text="Done")
# l3.grid(row=0,column=4,columnspan=2)

root.mainloop()