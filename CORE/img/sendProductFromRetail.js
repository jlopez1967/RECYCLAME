// Sample! Decare the participants (optional)
Usuario Retail APA SmartContract BlockChain 

Usuario->Retail:Registra en la caja la compra de productos

IDEnmascarado = Retail->APA.enmascararID(ID)

Retail->APA:RegistraFactura(IDenmascarado, Source, Recieve, SKUs[], cantidad[])

listaCriptoMaterialesReciclables = APA->SmartContract:traerMaterialRecicableDeProducto(SKU)

sourceWallet =  APA->APA.getWallet(Source)
recieveWallet = APA->APA.getWallet(Recieve)

for(SKUs){

     for(listaCriptoMaterialesReciclables) {
       APA->BlockChain.transfer(sourceWallet, recieveWallet, IDenmascarado,CantidadMaterialReciclable)
     }

     APA->SmartContract:awardsTrazabilityProduct(BlockChain, SKU, cantidad)
     
     
}








 

