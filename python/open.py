# fileName = input("Enter a file name: ")
# f = open(fileName, encoding="utf-8")

# for line in f:
#     line = line.rstrip()
#     if line.startswith("#"):
#         print(line)

# 7.2 Write a program that prompts for a file name, then opens that file and reads through the file, looking for lines of the form:
# X-DSPAM-Confidence:    0.8475
# Count these lines and extract the floating point values from each of the lines and compute the average of those values and produce an output as shown below.
# Do not use the sum() function or a variable named sum in your solution.
# You can download the sample data at http://www.py4e.com/code3/mbox-short.txt when you are testing below enter mbox-short.txt as the file name.
# Average spam confidence: 0.750718518519

fileName = input("Enter file name: ")
f = open(fileName)

total = 0.0
count = 0
for line in f:
        if line.startswith("X-DSPAM-Confidence:"):
                line = line.rstrip()
                p = line.find(":")
                value = float(line[p+1:].lstrip())
                count = count + 1
                total = total + value

print("Average spam confidence:",total/count)