pragma solidity  >=0.7.0;
 
contract RentAcarContract {
 
    address public creator;
    string public customerName;
    string public customerSurname;
    string public dealerCompanyName;
    string public text;
    uint public price;
    string public date;
    string public fromDate;
    string public toDate;

    uint public deposit;
    bool public carReady;
    bool public depositPayed;
    bool public clientAccepted;
    bool public carTaken;
    bool public carReturned;

    mapping (address => uint256) public balances;
    event Notarized(address indexed notary, string documentHash);

    constructor(string memory _name, string memory _surname, string memory _dealerCompany, uint _price, string memory _contractText, string memory _date) public {
        creator = msg.sender;
        customerName = _name;
        customerSurname = _surname;
        price = _price;
        text = _contractText;
        dealerCompanyName = _dealerCompany;
        date = _date;
    }

     function payDeposit(address user, uint _price) external payable {
        balances[user] += _price;
        depositPayed = true;
        carTaken = true;
    }

    function clientApproved(bool _accepted) public {
        clientAccepted = _accepted;
    }

    function returnCar(bool _return) public {
        carReturned = _return;
        carTaken = false;
    }

    function carIsReady(bool _ready, uint _deposit) public {
        carReady = _ready;
        deposit = _deposit;
    }

    function getPrice() public view returns(uint) {
        return price;
    }

    function notarizeDocument(string memory _documentHash) public {
        emit Notarized(msg.sender, _documentHash);
    }
  
}
