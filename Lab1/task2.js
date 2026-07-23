const f1=()=>{
    console.log("f1") ;

};
const f2 = ()=>{
    console.log("f2") ;
}
const main=()=>{
    console.log("main") ;
    setTimeout(f1,0);
    f2();
    console.log("end");
};
main() ;