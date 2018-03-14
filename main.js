
var EthUtil = require("ethereumjs-util");
var $ = require('jquery');

var Web3 = require("web3");
var web3 = new Web3();

//web3 functions
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var hash = web3.sha3("Some string to be hashed");
alert(hash);

//ethereumjs-util functions

var hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c+=2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

var privateKeyToAddress = function(privateKey) {
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}


$("#pageContent").change(function(){

	var hash=document.getElementById("number").value;  

    var loginField;
    loginField ='<div class="col-md-10">' +
                    '<div id="addressBox">' + 
                      '<h4> private key: <br>' + forge_sha256(hash) + 
                      '<br> <br> wallet address: <br>' + privateKeyToAddress(forge_sha256(hash)) + '</h4>'+ 
                    '</div>'+
                  '</div>'; 

    $('#addressBox').remove();

    var $jloginField = $(loginField);
    $("#pageContent").append($jloginField);
    
});

$( "#homePage" ).click(function() {

  $( "#pageContent").empty();

  var newPage = '<div class="container-fluid">'+
    '<img src="ether4.png" alt="Girl in a jacket" class="adjusted">'+
  '</div>'+
  '<div class="container-fluid" >'+
    '<div class="post" >'+
      'Status: Registration Active (Game Live at 2 pm EST) <br>'+
      'Buy In Amount: 0.01 ETH <br>'+
      'Smart Contract Address: 0xfb35ad702e715e61a3f362c62da7c1bd235102fc <br>'+
      'Winning Wallet Address: 0x3233789cd8984e98a837f9d8079b800f755b1501'+
    '</div>'+
  '</div>'; 

  $("#pageContent").append(newPage);

});



$( "#examplePage" ).click(function() {
  $( "#pageContent").empty();

  var part1 = '<div class="container-fluid" >'+
    '<h1>Example Quiz</h1>'+
      '<h3>Step 1: Register for the Game </h3>'+
      '<h6>To register, navigate to the sart contract and send the Buy In Amount.</h6>'+
      '<div class="post" >'+
          'Status: Registration Active (Game Live at 2 pm EST) <br>'+
          'Buy In Amount: 0.01 ETH <br>'+
          'Smart Contract Address: 0xfb35ad702e715e61a3f362c62da7c1bd235102fc <br>'+
          'Winning Wallet Address: 0x3233789cd8984e98a837f9d8079b800f755b1501 '+
      '</div>'+
    '</div>';

  var part2 = '<div class="container-fluid" >'+
      '<h3>Step 2: Solve the Puzzle </h3>'+
      '<h6>Puzzle description added when game goes live.  Rush to solve it first!</h6>'+
      '<div class="post" >'+
        'Status: Registration Active (Game Live!) <br>'+
        'Buy In Amount: 0.01 ETH <br>'+
        'Smart Contract Address: 0xfb35ad702e715e61a3f362c62da7c1bd235102fc <br>'+
        'Winning Wallet Address: 0x3233789cd8984e98a837f9d8079b800f755b1501 <br> <br>'+
        'Assign the numbers 1 through 26 to the letters a through z <br>'+
        'Find 2 US Presidents who’s first name letters add to the same number <br>'+
        'Take those 2 first names and combine them <br>'+
        'Delete any letter which shows up more than once <br>'+
        'Scramble the remaining letters and use them to obtain a word that would receive the highest Scrabble score<br>'+
        'You do not need to use all the remaining letters<br>'+
        'Use SHA(256) on this word to derive the private key of the wallet that unlocks this puzzle’s smart contract.'+
      '</div>'+
      '<h3>Solution</h3>'+
      '<h3>Grover = 7 + 18 + 15 + 22 + 5 + 18 = 85</h3>'+
      '<h3>Franklin = 6 + 18 + 1 + 14 + 11 + 12 + 9 + 14 = 85</h3>'+
      '<h3>govefankli</h3>'+
      '<h3>fanglike</h3>'+
    '</div>'
    ; 

  var part3 = '<div class="container-fluid" >'+
      '<h3>Step 3: Get the Keys </h3>'+
      '<h6>Paste your solution into the sha256 function on the Tools page to derive the public and private keys </h6>'+
      '<img  style="width: 50%; border: 5px solid grey;" src="screen_sha.png" alt="Boy in a jacket">'+
      '</div>';

  var part4 = '<div class="container-fluid" >'+
      '<h3>Step 3: Claim Your Ether! </h3>'+
      '<h6>Enter the Winning Wallet using the private key derived in Step 3 <br>'+
      'Call the contract function named payout and enter your personal wallet public addess so you can collect your prize! <br>'+
      'Make sure to use the same wallet address that you used when you registered for the game. <br>'+
      'Funds will be distributed when the next block is mined. </h6>'+
      '<img  style="width: 50%; border: 5px solid grey;" src="screen_sha.png" alt="Boy in a jacket">'+
      '</div>';



  var newPage = part1 + part2 + part3 + part4;

  $("#pageContent").append(newPage);

});


$( "#toolsPage" ).click(function() {
  $( "#pageContent").empty();

  var newPage =  '<div class="container-fluid" >'+
    '<h1>Wallet address generator</h1>'+
      '<h6>Enter puzzle answer below. Private key will be generated using sha256. Wallet address will be generated from private key. </h6>'+
    '<div class="form-group">'+
        '<input type="text" id="number" name="number" class="form-control" placeholder=""/>'+
    '</div>'+
  '</div>'; 

  $("#pageContent").append(newPage);
});



