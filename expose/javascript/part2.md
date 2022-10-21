1. 3 will be printed to the console. i was declared as a var so it is accessible anywhere in the function.
2. 150 will be printed to the console. discountedPrices was declared as a var so it is accessible anywhere in the function.
3. 150 will be printed to the console. finalPrice was declared as a var so it is accessible anywhere in the function.
4. The function will return the discounted array with the new discounted prices. The for loop pushes the new prices to discounted and discounted was declared as a var so it's accessible anywhere in the function.
5. An error will be thrown since i is not defined in that scope. i was declared as a let so it is only accessible in the block it was defined in which is the for loop.
6. An error will occur. discountedPrice was declared as a let inside the for loop so it is only accessible inside of the for loop.
7. 150 will be printed to the console. finalPrice was declared as a let at the start of the function so it is accessible anywhere in the function and 150 is the value it was at when the for loop ended.
8. The function will return the discounted array with the new discounted prices. discounted was declared as a let so it is accessible anywhere in the function.
9. An error will be thrown since i is not defined in that scope. i was declared as a let so it is only accessible in the block it was defined in which is the for loop.
10. 3 will be printed to the console. length was defined at the start of the function so it's accessible anywhere in the function.
11. The function will return the discounted array with the new discounted prices. discounted was declared as a const so it is accessible anywhere in the function. Despite it being intially empty, arrays declared as const can have elements adjusted. 
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting();
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. A. '32' the + concatenates the 2 terms since 1 is a string
    B. 1 the - converts the '3' to an integer and subtracts 2 from it
    C. 3 null is converted to 0
    D. 3null null is converted to the string null and the strings are concatenated
    E. 4 true is converted to 1 and the terms are added
    F. 0 false and null are both converted to 0
    G. 3undefined since '3' is a string and there is a +, undefined is converted to a string and they're concatenated together
    H. NaN undefined becomes NaN and so it can't subtract
14. A. true '2' gets converted to an integer
    B. false niether string is converted and they're compared lexogrphically
    C. true '2' is converted to an integer and the
    D. false '2' === checks equality without type conversions
    E. false true is converted to an integer and true = 1
    F. true Boolean(2) converts to true
15. == checks equality with type conversions while === is the strict equality check so it does not do any type conversions, it only checks if both terms are the same.

17. modifyArray will return the modified array [2,4,6]. In the function it calls the doSomething function on each element in the array and pushes the value to a new array.

19. 1
    4
    3
    2