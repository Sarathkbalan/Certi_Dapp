//SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract Certi {
    struct Certificate {
    string name;
    string course;
    string grade;
    string date;
    }
    address admin;
    event Issued(string indexed,uint256,string);

    constructor(){
        admin=msg.sender;
    }
    modifier  onlyadmin{
        require(msg.sender==admin,"unauthorised access");
        _;
    }
    mapping (uint256 =>Certificate)public  Certificates;

    function issue(
         uint256 _id,
         string memory _name,
         string memory _course,
         string memory _grade,
         string memory _date
                )public onlyadmin {
                    Certificates[_id]=Certificate(_name,_course,_grade,_date);
                    emit Issued(_course,_id,_grade);
                }
}
