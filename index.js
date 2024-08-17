const search = ()=>{
    const searchbox = document.getElementById('search').value.toUpperCase();
    const storeItems = document.getElementById('s-products')
    const products = document.querySelectorAll('#d-product-1')
    const productName = document.getElementsByTagName('p')

    for(i=0; i< productName.length; i++){
        let match = products[i].getElementsByTagName('p')[0];

        if(match){
          let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchbox) > -1){
                products[i].style.display='';
            }else{
                products[i].style.display='none';

            }
        }
    }
}