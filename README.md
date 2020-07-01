# RANDOM PASSWORD GENERATOR
I created this random generator to generate a random password.

# GenerateButtons
I have both the generateButton() function button and a button for Copy().

The generateButton() function uses multiple sets of numbers, letters, and
 symbols to make the generation of of random intergers more random.

 inside the javascript file the getRandom function creates a random "(arr)ay"  
 that is then used when called to each one of the constants (numbers, upper, lower, symbols)
 for picking random intergers via v1-v16 and then calling them as a single aray with catToy.
 Then using again the getRandom function to generate a random interger via catToy with template
  literals. After of witch the intergers are called to the value of "pwd" via the const "pw" to the HTML. 

  # Copy()
  i called the "pwd" password input in a function using getElementById. Allowed it to sellect upto 20 charaters by setSelectRange  and execCommand to in final "Copy" the selected text in "pwd" and console.log the value of the copied txt.



