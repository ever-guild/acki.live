const c=`
    query GetAccount($address: String!) {
        account(address: $address) {
            info {
                boc
            }
        }
    }
`;export{c as G};
