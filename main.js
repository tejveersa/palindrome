<script>
function Palindrome()
{
    var num1 = window.prompt("Enter 3 Digit Integer:");
    num = parseInt(num1);
    while (num > 999 || num < 100)
    {
     alert("Please Enter a 3 Digit Integer!");
     var num = window.prompt("Enter 3 Digit Integer:");
     num = parseInt(num);
    }


var mod3 = num % 10;
num = Math.floor(num / 10);
var mod2 = num % 10;
var mod1 = Math.floor(num / 10);

if (mod1 == mod3)
alert("You entered: " + num1 + "\nNumber is a palindrome");
else
alert("You entered: " + num1 + "\nNumber not palindrome");
}

Palindrome()

</script>
