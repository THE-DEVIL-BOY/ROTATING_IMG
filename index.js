setTimeout(()=>{
    $(".box").addClass("ani1");
    setTimeout(()=>{
        $(".box").removeClass("ani1");
        $(".box").addClass("ani2");
        setTimeout(()=>{
            $(".box").removeClass("ani2");
            $(".box").addClass("ani3");
            setTimeout(()=>{
                $(".box").removeClass("ani3");
                $(".box").addClass("ani4");
                setTimeout(()=>{
                    $(".box").removeClass("ani4");
                    $(".box").addClass("ani5");       
                    $(".box").css({"background-image": "url(img.png)"});  
                    
                    setTimeout(()=>{
                        $(".box").removeClass("ani5");
                        setTimeout(()=>{
                            $(".container1").addClass("small");       
                            setTimeout(()=>{
                                $(".cont1").addClass("large");       
                                setTimeout(()=>{
                                    $(".cont1").addClass("ani6");       
                                    $(".cont1").css({"background-image": "url(pick2.jpeg)"});  
                                    setTimeout(()=>{
                                        $(".cont").css({"background-image": "url(1679146755invoicelogo.jpg)"});              
                                        setTimeout(()=>{
                                            $(".cont1").addClass("sleep");       
                                            $(".container1").addClass("sleep");       
        
                                        },900,) 
                                    },855,) 
                                },850.04,)   
                            },850.02,)    
                        },850,)
                    },800,)  

                },750,)
            },700,)
        },650,)

    },600)
},500)
