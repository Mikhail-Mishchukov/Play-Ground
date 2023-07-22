# Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

def twoArePositive(a, b, c):
    countPositiveArgs = 0
    if a > 0:
        countPositiveArgs = countPositiveArgs + 1  
    if b > 0:
        countPositiveArgs = countPositiveArgs + 1
    if c > 0:
        countPositiveArgs = countPositiveArgs + 1
    
    return    countPositiveArgs==2

print(twoArePositive(1,1,1))  
print(twoArePositive(1,0,0))  
print(twoArePositive(1,1,0))  
print(twoArePositive(-1,1,-1))  



#Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
def capitals(word: str):
    result = []
    for index in range(len(word)):
        if word[index].isupper():
            result.append(index)
    return result

#Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
def divisors(integer:int):
    counter=2
    result=[]

    while counter < integer:
        if (integer % counter==0):
            result.append(counter)
        counter += 1
    if ( len(result) == 0):
        return f"{integer} is prime"
    return result
   
#You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

from typing import List

def is_valid_walk(walk:List):
    countEastStep=0
    countWestStep=0
    countNorthStep=0
    countSouthStep=0
    
    if len(walk) != 10:
        return False
    for direction in walk:
        match (direction):
            case 'n':
                countNorthStep += 1
            case 'w' :
                countWestStep += 1
            case 'e':
                countEastStep += 1
            case 's':
                countSouthStep += 1
    
    if (countSouthStep != countNorthStep):
        return False
    
    if (countWestStep != countEastStep):
        return False
    
    return True
        

#An IPv4 address is a 32-bit number that identifies a device on the internet.

#While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

#In this kata, you will create the function ipToNum that takes an ip address and converts it to a number, as well as the function numToIp that takes a number and converts it to an IP address string. Input will always be valid.
def ip_to_num(ip:str):
    splitNumbers=ip.split('.')
    resultStr =""
    for number in splitNumbers:
        binaryStr = bin(int(number)).replace("0b","").rjust(8).replace(' ','0')
            
        resultStr = resultStr + binaryStr
    result =int(resultStr,2)
    return result 

def num_to_ip(num:int):
    numStr=str(num)[::-1]

    # binaryCount = bin(num).replace("0b","")
    binaryCount= format(int(numStr),"b")[::-1]
    resultStr=""
    for number in [binaryCount[i:i+8] for i in range(0, len(binaryCount), 8)]:
        resultStr=resultStr+ "." + str(int(number,2))
        
    return resultStr.replace(".","",1)
    
num_to_ip(167772160)
