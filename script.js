document.querySelector('#commandez').onclick = function calculateDiscount() {
    const discountMac = 0.1,
        discountHp = 0.125,
        discount_10Pcs = 0.15;
    let priceMac = 300000,
        priceHp = 250000,
        discountPrice,
        totalPrice,
        discountPriceMsg,
        totalPriceMSg;

        let typePc = prompt("Veuillez entrer le type de pc que vous voulez!");
        let qtePcText = prompt("Veuillez entrer la quantité de pc que vous voulez?");
        let qtePc = parseInt(qtePcText);
    if (typePc == "MacBook" || typePc == "Macbook" || typePc == "macbook") {
        if (qtePc >= 10) {
            discountPrice = priceMac - (priceMac * discount_10Pcs);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix reduit d'un pc de type Macbook est ${discountPrice} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type Macbook vous coûtent ${totalPrice} Fcfa.`;
            alert(totalPriceMsg);
        } else if (qtePc > 1 && qtePc < 10) {
            discountPrice = priceMac - (priceMac * discountMac);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix reduit d'un pc de type Macbook est ${discountPrice} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type Macbook vous coûtent ${totalPrice} Fcfa.`;
            alert(totalPriceMsg);
        } else if (qtePc == 1) {
            //discountPrice = priceMac - (priceMac * discountMac);
            //totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix d'un pc de type Macbook est ${priceMac} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pc de type Macbook vous coût ${priceMac} Fcfa.`;
            alert(totalPriceMsg);
        }
    } else if (typePc == "HP" || typePc == "Hp" || typePc == "hp") {
        if (qtePc >= 10) {
            discountPrice = priceHp - (priceHp * discount_10Pcs);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix reduit d'un pc de type Hp est ${discountPrice} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs e pe Hp vous coûtent ${totalPrice} Fcfa.`;
            alert(totalPriceMsg);
        } else if (qtePc > 1 && qtePc < 10) {
            discountPrice = priceHp - (priceHp * discountHp);
            totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix reduit d'un pc de type Hp est ${discountPrice} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pcs de type Hp vous coûtent ${totalPrice} Fcfa.`;
            alert(totalPriceMsg);
        } else if (qtePc == 1) {
            //discountPrice = priceHp - (priceHp * discountHp);
            //totalPrice = discountPrice * qtePc;
            discountPriceMsg = `Le prix d'un pc de type Hp est ${priceHp} Fcfa.`;
            alert(discountPriceMsg);
            totalPriceMsg = `${qtePc} pc de type HP vous coût ${priceHp} Fcfa.`;
            alert(totalPriceMsg);
        }
    } else {
        alert("Désole! nous ne vendons pas la marque de Pc que vous avez entré, veuillez acheter les pcs Macbook ou Hp de bonne qualité chez nous");
    }
}

