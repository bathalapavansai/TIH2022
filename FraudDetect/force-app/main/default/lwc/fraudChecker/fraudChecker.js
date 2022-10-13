import { LightningElement } from 'lwc';

export default class FraudChecker extends LightningElement {
    creditCardUtilization =24;
    paymentHistory=99;
    derogatoryMarks=1;
    ageOfCreditHistoryYears=6;
    ageOfCreditHistoryMonths=7;
    totalAccounts=14;
    hardInquiries=1;
    renderedCallback(){
        let CCU = this.template.querySelector('[data-id="CCU"]');
        if(CCU){
            if(this.creditCardUtilization<34){
                CCU.classList.add('red','leftIndicator')
            }
            else if(this.creditCardUtilization<67){
                CCU.classList.add('amber','leftIndicator')
            }
            else{
                CCU.classList.add('green','leftIndicator')
            }
        }
        let PH = this.template.querySelector('[data-id="PH"]');
        if(PH){
            if(this.paymentHistory<34){
                PH.classList.add('red','leftIndicator')
            }
            else if(this.paymentHistory<67){
                PH.classList.add('amber','leftIndicator')
            }
            else{
                PH.classList.add('green','leftIndicator')
            }
        }
        let DM = this.template.querySelector('[data-id="DM"]');
        if(DM){
            if(this.derogatoryMarks<4){
                DM.classList.add('red','leftIndicator')
            }
            else if(this.derogatoryMarks<7){
                DM.classList.add('amber','leftIndicator')
            }
            else{
                DM.classList.add('green','leftIndicator')
            }
        }
        let ACH = this.template.querySelector('[data-id="ACH"]');
        if(ACH){
            if(this.ageOfCreditHistory<6){
                ACH.classList.add('red','leftIndicator')
            }
            else if(this.derogatoryMarks<11){
                ACH.classList.add('amber','leftIndicator')
            }
            else{
                ACH.classList.add('green','leftIndicator')
            }
        }
        let TA = this.template.querySelector('[data-id="TA"]');
        if(TA){
            if(this.totalAccounts<3){
                TA.classList.add('red','leftIndicator')
            }
            else if(this.totalAccounts<6){
                TA.classList.add('amber','leftIndicator')
            }
            else{
                TA.classList.add('green','leftIndicator')
            }
        }
        let HI = this.template.querySelector('[data-id="HI"]');
        if(HI){
            if(this.hardInquiries>10){
                HI.classList.add('red','leftIndicator')
            }
            else if(this.hardInquiries>67){
                HI.classList.add('amber','leftIndicator')
            }
            else{
                HI.classList.add('green','leftIndicator')
            }
        }
    }
}