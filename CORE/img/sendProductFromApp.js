// Sample! Decare the participants (optional)
Usuario App APA SmartContract BlockChain 

Usuario->App:Registra compra de productos al scanear el codigo QR

IDEnmascarado = App->APA.enmascararID(ID)

App->APA:RegistraCompra(IDenmascarado, Source, Recieve, SKU, cantidad)

listaCriptoMaterialesReciclables = APA->SmartContract:traerMaterialRecicableDeProducto(SKU)


sourceWallet =  APA->APA.getWallet(Source)

recieveWallet = APA->APA.getWallet(Recieve)


for(listaCriptoMaterialesReciclables) {
  APA->BlockChain.transfer(sourceWallet, recieveWallet, IDenmascarado,CantidadMaterialReciclable)
}

APA->SmartContract:awardsTrazabilityProduct(BlockChain, SKU, cantidad)






 

