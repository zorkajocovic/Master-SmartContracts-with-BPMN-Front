pragma solidity >=0.5.16;
 
contract RentAcarContract {
 
    string private customerName;
    string private customerSurname;
    string private dealerCompanyName;
    int private price;
    string private text;

    constructor() public {
        customerName = "Zorka";
        customerSurname = "Jocovic";
        price = 10;
        dealerCompanyName = "";
    }

    function getPrice() public view returns(string memory){
        return customerName;
    }
//kupac treba da potvrdi cijenu i time se odobrava contract
    function acceptPrice() public view returns(bool memory){
        return true;
    }

//dealer potvrdjuje da je placeno


  
}
