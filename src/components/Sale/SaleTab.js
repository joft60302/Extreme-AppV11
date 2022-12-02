import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState,useEffect } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import logo1 from "../../pic/logo/logo1.png";
import logostep4 from "../../pic/logo/logo0.png";
import PrintIcon from '@mui/icons-material/Print';
import "./Sale.css";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
import html2canvas from "html2canvas";
import pX from "../../pic/logo/px.png";
import pY from "../../pic/logo/py.png";
import pZ from "../../pic/logo/pz.png";
import pA from "../../pic/logo/pa.png";
import pB from "../../pic/logo/pb.png";
import pC from "../../pic/logo/pc.png";
import pA1 from "../../pic/logo/pa1.png";
import pA21 from "../../pic/logo/pa21.png";
import pA22 from "../../pic/logo/pa22.png";
import pA31 from "../../pic/logo/pa31.png";
import pA32 from "../../pic/logo/pa32.png";
import pB1 from "../../pic/logo/pb1.png";
import pB21 from "../../pic/logo/pb21.png";
import pB22 from "../../pic/logo/pb22.png";
import pB31 from "../../pic/logo/pb31.png";
import pB32 from "../../pic/logo/pb32.png";
import pC1 from "../../pic/logo/pc1.png";
import pC21 from "../../pic/logo/pc21.png";
import pC22 from "../../pic/logo/pc22.png";
import pC31 from "../../pic/logo/pc31.png";
import pC32 from "../../pic/logo/pc32.png";
import pS from "../../pic/logo/pS.png";
import pM from "../../pic/logo/pM.png";
import pL from "../../pic/logo/pL.png";
import pXL from "../../pic/logo/pXL.png";
import pXXL from "../../pic/logo/pXXL.png";
import { Container } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var UsePrice=[];
  var SetPriceS={
      X:4000,
      Y:6000,
      Z:10000,
      A:5500,
      B:4500,
      C:2000,
      A1:3400,
      A21:4800,
      A22:6100,
      A31:4400,
      A32:5300,
      B1:3400,
      B21:4800,
      B22:6100,
      B31:4400,
      B32:5300,
      C1:2800,
      C21:3600,
      C22:4900,
      C31:3400,
      C32:4300
  };
  var SetPriceM={
    X:5000,
    Y:7000,
    Z:11000,
    A:6000,
    B:5000,
    C:2500,
    A1:3600,
    A21:5000,
    A22:6300,
    A31:4600,
    A32:5500,
    B1:3600,
    B21:5000,
    B22:6300,
    B31:4600,
    B32:5500,
    C1:3000,
    C21:3800,
    C22:5100,
    C31:3600,
    C32:4500
  };
  var SetPriceL={
    X:6000,
    Y:8000,
    Z:12000,
    A:6500,
    B:5500,
    C:2500,
    A1:4200,
    A21:5600,
    A22:6900,
    A31:5000,
    A32:5900,
    B1:4200,
    B21:5600,
    B22:6900,
    B31:5000,
    B32:5900,
    C1:3600,
    C21:4400,
    C22:5700,
    C31:4000,
    C32:4900
  };
  var SetPriceXL={
    X:7000,
    Y:9000,
    Z:13000,
    A:7000,
    B:6000,
    C:2500,
    A1:4400,
    A21:5800,
    A22:7100,
    A31:5200,
    A32:6100,
    B1:4400,
    B21:5800,
    B22:7100,
    B31:5200,
    B32:6100,
    C1:3800,
    C21:4600,
    C22:5900,
    C31:4200,
    C32:5100
  };
  var SetPriceXXL={
    X:8000,
    Y:10000,
    Z:14000,
    A:7500,
    B:6500,
    C:2500,
    A1:5000,
    A21:6400,
    A22:7700,
    A31:5600,
    A32:6500,
    B1:5000,
    B21:6400,
    B22:7700,
    B31:5600,
    B32:6500,
    C1:4400,
    C21:5200,
    C22:6500,
    C31:4600,
    C32:5500
  };
  UsePrice.push(SetPriceS);
  UsePrice.push(SetPriceM);
  UsePrice.push(SetPriceL);
  UsePrice.push(SetPriceXL);
  UsePrice.push(SetPriceXXL);

  const [S, SetS] = useState(1)
  const [M, SetM] = useState(0)
  const [L, SetL] = useState(0)
  const [XL, SetXL] = useState(0)
  const [XXL, SetXXL] = useState(0)
  const [Size,SetSize] = useState(UsePrice[0])
  const SelectS = () => {SetS(1);SetM(0);SetL(0);SetXL(0);SetXXL(0);SetSize(UsePrice[0]);console.log("Size = S")}
  const SelectM = () => {SetS(0);SetM(1);SetL(0);SetXL(0);SetXXL(0);SetSize(UsePrice[1]);console.log("Size = M")}
  const SelectL = () => {SetS(0);SetM(0);SetL(1);SetXL(0);SetXXL(0);SetSize(UsePrice[2]);console.log("Size = L")}
  const SelectXL = () => {SetS(0);SetM(0);SetL(0);SetXL(1);SetXXL(0);SetSize(UsePrice[3]);console.log("Size = XL")}
  const SelectXXL = () => {SetS(0);SetM(0);SetL(0);SetXL(0);SetXXL(1);SetSize(UsePrice[4]);console.log("Size = XXL")}
  const [inputName, setinputName] = useState("");
  const [inpuTel, setinputTel] = useState("");
  const [inpuLine, setinputLine] = useState("");
  const [inpuNamecar, setinputNamecar] = useState("");
  const [inpuColorcar, setinputColorcar] = useState("");
  const [inputCarlicense, setinputCarlicense] = useState("");
  const [inputDiscountpx, setinputDiscountpx] = useState('');
  const [inputDiscountpy, setinputDiscountpy] = useState("");
  const [inputDiscountpz, setinputDiscountpz] = useState("");
  const [inputDiscountpa, setinputDiscountpa] = useState('');
  const [inputDiscountpb, setinputDiscountpb] = useState("");
  const [inputDiscountpc, setinputDiscountpc] = useState("");
  const [inputDiscountpa1, setinputDiscountpa1] = useState();
  const [inputDiscountpa21, setinputDiscountpa21] = useState("");
  const [inputDiscountpa22, setinputDiscountpa22] = useState("");
  const [inputDiscountpa31, setinputDiscountpa31] = useState("");
  const [inputDiscountpa32, setinputDiscountpa32] = useState("");
  const [inputDiscountpb1, setinputDiscountpb1] = useState("");
  const [inputDiscountpb21, setinputDiscountpb21] = useState("");
  const [inputDiscountpb22, setinputDiscountpb22] = useState("");
  const [inputDiscountpb31, setinputDiscountpb31] = useState("");
  const [inputDiscountpb32, setinputDiscountpb32] = useState("");
  const [inputDiscountpc1, setinputDiscountpc1] = useState("");
  const [inputDiscountpc21, setinputDiscountpc21] = useState("");
  const [inputDiscountpc22, setinputDiscountpc22] = useState("");
  const [inputDiscountpc31, setinputDiscountpc31] = useState("");
  const [inputDiscountpc32, setinputDiscountpc32] = useState("");
  
  const [inputComment, setinputComment] = useState("");

  const [X, SetX] = useState(1)
  const [Y, SetY] = useState(0)
  const [Z, SetZ] = useState(0)
  const [Course, SetCoures] = useState(pX) 
  const [CoursePrice, SetCouresPrice] = useState(Size.X) 
  const [CoursePriceIP, SetCouresPriceIP] = useState("SumPx") 
  const SelectX = () => {SetX(1);SetY(0);SetZ(0);SetCoures(pX);SetCouresPrice(Size.X);SetCouresPriceIP("SumPx");}
  const SelectY = () => {SetX(0);SetY(1);SetZ(0);SetCoures(pY);SetCouresPrice(Size.Y);SetCouresPriceIP("SumPy");}
  const SelectZ = () => {SetX(0);SetY(0);SetZ(1);SetCoures(pZ);SetCouresPrice(Size.Z);SetCouresPriceIP("SumPz");}

 
 

  const [A, SetA] = useState(1)
  const [B, SetB] = useState(0)
  const [C, SetC] = useState(0)
  const [Body, SetBody] = useState(pA)
  const [BodyPrice, SetBodyPrice] = useState(Size.A)
  const [BodyPriceIP, SetBodyPriceIP] = useState("SumPa")
  const SelectA = () => {if(A===0){SetE1(0);SetE21(0);SetE22(0);SetE31(0);SetE32(0);SetExtra1(0);SetExtra21(0);SetExtra22(0);SetExtra31(0);SetExtra32(0);} SetA(1);SetB(0);SetC(0);SetBody(pA);SetBodyPrice(Size.A);SetBodyPriceIP("SumPa");}
  const SelectB = () => {if(B===0){SetE1(0);SetE21(0);SetE22(0);SetE31(0);SetE32(0);SetExtra1(0);SetExtra21(0);SetExtra22(0);SetExtra31(0);SetExtra32(0);} SetA(0);SetB(1);SetC(0);SetBody(pB);SetBodyPrice(Size.B);SetBodyPriceIP("SumPb");}
  const SelectC = () => {if(C===0){SetE1(0);SetE21(0);SetE22(0);SetE31(0);SetE32(0);SetExtra1(0);SetExtra21(0);SetExtra22(0);SetExtra31(0);SetExtra32(0);} SetA(0);SetB(0);SetC(1);SetBody(pC);SetBodyPrice(Size.C);SetBodyPriceIP("SumPc");}

  const [E1, SetE1] = useState(0)
  const [E21, SetE21] = useState(0)
  const [E22, SetE22] = useState(0)   
  const [E31, SetE31] = useState(0)
  const [E32, SetE32] = useState(0)  
  const [Extra1, SetExtra1] = useState(0)
  const [Extra21, SetExtra21] = useState(0)
  const [Extra22, SetExtra22] = useState(0)
  const [Extra31, SetExtra31] = useState(0)
  const [Extra32, SetExtra32] = useState(0)
  const [ExtraP1, SetExtraP1] = useState(0)
  const [ExtraP21, SetExtraP21] = useState(0)
  const [ExtraP22, SetExtraP22] = useState(0)
  const [ExtraP31, SetExtraP31] = useState(0)
  const [ExtraP32, SetExtraP32] = useState(0)
  const [ExtraIP1, SetExtraIP1] = useState()
  const [ExtraIP21, SetExtraIP21] = useState()
  const [ExtraIP22, SetExtraIP22] = useState()
  const [ExtraIP31, SetExtraIP31] = useState()
  const [ExtraIP32, SetExtraIP32] = useState()
 

  
  const SelectE1 = (Extra,ExtraP1,ExtraIP1) => {if(E1===1){SetE1(0);SetExtra1(0);} else {SetE1(1);SetExtra1(Extra);SetExtraP1(ExtraP1);SetExtraIP1(ExtraIP1);}}
  const SelectE21 = (Extra,ExtraP21,ExtraIP21) => {if(E21===1){SetE21(0);SetExtra21(0);} else {SetE21(1);SetE22(0);SetExtra21(Extra);SetExtra22(0);SetExtraP21(ExtraP21);SetExtraIP21(ExtraIP21);}}
  const SelectE22 = (Extra,ExtraP22,ExtraIP22) => {if(E22===1){SetE22(0);SetExtra22(0);} else {SetE22(1);SetE21(0);SetExtra22(Extra);SetExtra21(0);SetExtraP22(ExtraP22);SetExtraIP22(ExtraIP22);}}
  const SelectE31 = (Extra,ExtraP31,ExtraIP31) => {if(E31===1){SetE31(0);SetExtra31(0);} else {SetE31(1);SetE32(0);SetExtra31(Extra);SetExtra32(0);SetExtraP31(ExtraP31);SetExtraIP31(ExtraIP31);}}
  const SelectE32 = (Extra,ExtraP32,ExtraIP32) => {if(E32===1){SetE32(0);SetExtra32(0);} else {SetE32(1);SetE31(0);SetExtra32(Extra);SetExtra31(0);SetExtraP32(ExtraP32);SetExtraIP32(ExtraIP32);}}

  var Sum=0
  const Price = () => {
        console.log("-----------");

      if(S===1){
        if(Course===pX){Sum+=UsePrice[0].X}
        else if(Course===pY){Sum+=UsePrice[0].Y}
        else if(Course===pZ){Sum+=UsePrice[0].Z}
        console.log(Sum)

        if(Body===pA){
          Sum+=UsePrice[0].A;
            if(Extra1!==0){Sum+=UsePrice[0].A1}
            if(Extra21!==0){Sum+=UsePrice[0].A21}
            if(Extra22!==0){Sum+=UsePrice[0].A22}
            if(Extra31!==0){Sum+=UsePrice[0].A31}
            if(Extra32!==0){Sum+=UsePrice[0].A32}
            console.log(Sum)
        } else if(Body===pB){
          Sum+=UsePrice[0].B;
          if(Extra1!==0){Sum+=UsePrice[0].B1}
          if(Extra21!==0){Sum+=UsePrice[0].B21}
          if(Extra22!==0){Sum+=UsePrice[0].B22}
          if(Extra31!==0){Sum+=UsePrice[0].B31}
          if(Extra32!==0){Sum+=UsePrice[0].B32}
            console.log(Sum)
        } else if(Body===pC){
          Sum+=UsePrice[0].C;
          if(Extra1!==0){Sum+=UsePrice[0].C1}
          if(Extra21!==0){Sum+=UsePrice[0].C21}
          if(Extra22!==0){Sum+=UsePrice[0].C22}
          if(Extra31!==0){Sum+=UsePrice[0].C31}
          if(Extra32!==0){Sum+=UsePrice[0].C32}
            console.log(Sum)
        }
      }

      else if(M===1){
        if(Course===pX){Sum+=UsePrice[1].X}
        else if(Course===pY){Sum+=UsePrice[1].Y}
        else if(Course===pZ){Sum+=UsePrice[1].Z}
        console.log(Sum)

        if(Body===pA){
          Sum+=UsePrice[1].A;
            if(Extra1!==0){Sum+=UsePrice[1].A1}
            if(Extra21!==0){Sum+=UsePrice[1].A21}
            if(Extra22!==0){Sum+=UsePrice[1].A22}
            if(Extra31!==0){Sum+=UsePrice[1].A31}
            if(Extra32!==0){Sum+=UsePrice[1].A32}
            console.log(Sum)
        } else if(Body===pB){
          Sum+=UsePrice[1].B;
          if(Extra1!==0){Sum+=UsePrice[1].B1}
          if(Extra21!==0){Sum+=UsePrice[1].B21}
          if(Extra22!==0){Sum+=UsePrice[1].B22}
          if(Extra31!==0){Sum+=UsePrice[1].B31}
          if(Extra32!==0){Sum+=UsePrice[1].B32}
            console.log(Sum)
        } else if(Body===pC){
          Sum+=UsePrice[1].C;
          if(Extra1!==0){Sum+=UsePrice[1].C1}
          if(Extra21!==0){Sum+=UsePrice[1].C21}
          if(Extra22!==0){Sum+=UsePrice[1].C22}
          if(Extra31!==0){Sum+=UsePrice[1].C31}
          if(Extra32!==0){Sum+=UsePrice[1].C32}
            console.log(Sum)
        }
      }

      else if(L===1){
        if(Course===pX){Sum+=UsePrice[2].X}
        else if(Course===pY){Sum+=UsePrice[2].Y}
        else if(Course===pZ){Sum+=UsePrice[2].Z}
        console.log(Sum)

        if(Body===pA){
          Sum+=UsePrice[2].A;
            if(Extra1!==0){Sum+=UsePrice[2].A1}
            if(Extra21!==0){Sum+=UsePrice[2].A21}
            if(Extra22!==0){Sum+=UsePrice[2].A22}
            if(Extra31!==0){Sum+=UsePrice[2].A31}
            if(Extra32!==0){Sum+=UsePrice[2].A32}
            console.log(Sum)
        } else if(Body===pB){
          Sum+=UsePrice[2].B;
          if(Extra1!==0){Sum+=UsePrice[2].B1}
          if(Extra21!==0){Sum+=UsePrice[2].B21}
          if(Extra22!==0){Sum+=UsePrice[2].B22}
          if(Extra31!==0){Sum+=UsePrice[2].B31}
          if(Extra32!==0){Sum+=UsePrice[2].B32}
            console.log(Sum)
        } else if(Body===pC){
          Sum+=UsePrice[2].C;
          if(Extra1!==0){Sum+=UsePrice[2].C1}
          if(Extra21!==0){Sum+=UsePrice[2].C21}
          if(Extra22!==0){Sum+=UsePrice[2].C22}
          if(Extra31!==0){Sum+=UsePrice[2].C31}
          if(Extra32!==0){Sum+=UsePrice[2].C32}
            console.log(Sum)
        }
      }

      else if(XL===1){
        if(Course===pX){Sum+=UsePrice[3].X}
        else if(Course===pY){Sum+=UsePrice[3].Y}
        else if(Course===pZ){Sum+=UsePrice[3].Z}
        console.log(Sum)

        if(Body===pA){
          Sum+=UsePrice[3].A;
            if(Extra1!==0){Sum+=UsePrice[3].A1}
            if(Extra21!==0){Sum+=UsePrice[3].A21}
            if(Extra22!==0){Sum+=UsePrice[3].A22}
            if(Extra31!==0){Sum+=UsePrice[3].A31}
            if(Extra32!==0){Sum+=UsePrice[3].A32}
            console.log(Sum)
        } else if(Body===pB){
          Sum+=UsePrice[3].B;
          if(Extra1!==0){Sum+=UsePrice[3].B1}
          if(Extra21!==0){Sum+=UsePrice[3].B21}
          if(Extra22!==0){Sum+=UsePrice[3].B22}
          if(Extra31!==0){Sum+=UsePrice[3].B31}
          if(Extra32!==0){Sum+=UsePrice[3].B32}
            console.log(Sum)
        } else if(Body===pC){
          Sum+=UsePrice[3].C;
          if(Extra1!==0){Sum+=UsePrice[3].C1}
          if(Extra21!==0){Sum+=UsePrice[3].C21}
          if(Extra22!==0){Sum+=UsePrice[3].C22}
          if(Extra31!==0){Sum+=UsePrice[3].C31}
          if(Extra32!==0){Sum+=UsePrice[3].C32}
            console.log(Sum)
        }
      }

      else if(XXL===1){
        if(Course===pX){Sum+=UsePrice[4].X}
        else if(Course===pY){Sum+=UsePrice[4].Y}
        else if(Course===pZ){Sum+=UsePrice[4].Z}
        console.log(Sum)

        if(Body===pA){
          Sum+=UsePrice[4].A;
            if(Extra1!==0){Sum+=UsePrice[4].A1}
            if(Extra21!==0){Sum+=UsePrice[4].A21}
            if(Extra22!==0){Sum+=UsePrice[4].A22}
            if(Extra31!==0){Sum+=UsePrice[4].A31}
            if(Extra32!==0){Sum+=UsePrice[4].A32}
            console.log(Sum)
        } else if(Body===pB){
          Sum+=UsePrice[4].B;
          if(Extra1!==0){Sum+=UsePrice[4].B1}
          if(Extra21!==0){Sum+=UsePrice[4].B21}
          if(Extra22!==0){Sum+=UsePrice[4].B22}
          if(Extra31!==0){Sum+=UsePrice[4].B31}
          if(Extra32!==0){Sum+=UsePrice[4].B32}
            console.log(Sum)
        } else if(Body===pC){
          Sum+=UsePrice[4].C;
          if(Extra1!==0){Sum+=UsePrice[4].C1}
          if(Extra21!==0){Sum+=UsePrice[4].C21}
          if(Extra22!==0){Sum+=UsePrice[4].C22}
          if(Extra31!==0){Sum+=UsePrice[4].C31}
          if(Extra32!==0){Sum+=UsePrice[4].C32}
            console.log(Sum)
        }
      }
  }

  const DownloadPDF = () =>{
    const input = document.getElementById("report")
    html2canvas(input,{logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height*imgWidth/canvas.width;
      const imgData = canvas.toDataURL('img/png');
      const pdf = new jsPDF('p','mm','a4');
      pdf.addImage(imgData,'PNG',0,0,imgWidth, imgHeight);
      pdf.save("report.pdf")
    })

  }

  const Logout=()=>{
    props.Logout(0)
    localStorage.removeItem("LoginValue");
    const LoginLocalValue= localStorage.getItem("LoginValue");
    if(LoginLocalValue === null){
      window.location.reload();
    }
    
  }

 /* format Number Use variable.toLocaleString()*/
 /* PIC */


 const test1 = "test"
 
 useEffect(() => {
  // storing input name
  if(Extra1===pA1){
    localStorage.setItem("DiscountPricePA1", (inputDiscountpa1));
  } if(Extra1===pB1){
    localStorage.setItem("DiscountPricePB1", (inputDiscountpb1));
  }
  if(Extra1===pC1){
    localStorage.setItem("DiscountPricePC1", (inputDiscountpc1));
  }if(Extra21===pA21){
    localStorage.setItem("DiscountPricePA21", (inputDiscountpa21));
  } if(Extra21===pB21){
    localStorage.setItem("DiscountPricePB21", (inputDiscountpb21));
  }if(Extra21===pC21){
    localStorage.setItem("DiscountPricePC21", (inputDiscountpc21));
  }if(Extra22===pA22){
    localStorage.setItem("DiscountPricePA22", (inputDiscountpa22));
  } if(Extra22===pB22){
    localStorage.setItem("DiscountPricePB22", (inputDiscountpb22));
  }if(Extra22===pC22){
    localStorage.setItem("DiscountPricePC22", (inputDiscountpc22));
  }if(Extra31===pA31){
    localStorage.setItem("DiscountPricePA31", (inputDiscountpa31));
  } if(Extra31===pB31){
    localStorage.setItem("DiscountPricePB31", (inputDiscountpb31));
  }
  if(Extra31===pC31){
    localStorage.setItem("DiscountPricePC31", (inputDiscountpc31));
  }
  if(Extra32===pA32){
    localStorage.setItem("DiscountPricePA32", (inputDiscountpa32));
  } if(Extra32===pB32){
    localStorage.setItem("DiscountPricePB32", (inputDiscountpb32));
  }
  if(Course===pX){
    localStorage.setItem("SumPx", (inputDiscountpx));
  }
  if(Course===pY){
    localStorage.setItem("SumPy", (inputDiscountpy));
  }
  if(Course===pZ){
    localStorage.setItem("SumPz", (inputDiscountpz));
  }
  if(Body===pA){
    localStorage.setItem("SumPa", (inputDiscountpa));
  }
  if(Body===pB){
    localStorage.setItem("SumPb", (inputDiscountpb));
  }
  if(Body===pC){
    localStorage.setItem("SumPc", (inputDiscountpc));
  }

 
}, [inputDiscountpa1,inputDiscountpb1,inputDiscountpc1,inputDiscountpa21,inputDiscountpb21,inputDiscountpc21,inputDiscountpa22,inputDiscountpb22,inputDiscountpc22,inputDiscountpa31,inputDiscountpb31,inputDiscountpc31,inputDiscountpa32,inputDiscountpb32,inputDiscountpc32,inputDiscountpx,inputDiscountpy,inputDiscountpz,inputDiscountpa,inputDiscountpb,inputDiscountpc]);

const ValueCourseIP = localStorage.getItem(CoursePriceIP);
const ValueBodyIP = localStorage.getItem(BodyPriceIP);
const ValueExtraIP1 = localStorage.getItem(ExtraIP1);
const ValueExtraIP21 = localStorage.getItem(ExtraIP21);
const ValueExtraIP22 = localStorage.getItem(ExtraIP22);
const ValueExtraIP31 = localStorage.getItem(ExtraIP31);
const ValueExtraIP32 = localStorage.getItem(ExtraIP32);
  return (
    <Box sx={{ width: '100%' }}> 
      
        <Box display="flex" flexDirection="row" sx={{ borderBottom: 1, borderColor: 'black',flexGrow: 1}}>
            <Box display="flex" justifyContent="center" alignItems="center"sx={{width : 100}}><Box component="img" sx={{height: 50}} alt="logo" src={logo1}></Box></Box>
            <Box display="flex" justifyContent="center" sx={{flexGrow: 1}}><Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab sx={{mx: 1, color:'primary.main'}} label="SET UP" {...a11yProps(0)} />
                <Tab sx={{mx: 1, color:'primary.main'}} label="STEP 1" {...a11yProps(1)} />
                <Tab sx={{mx: 1, color:'primary.main'}} label="STEP 2" {...a11yProps(2)} />
                <Tab sx={{mx: 1, color:'primary.main'}} label="STEP 3" {...a11yProps(3)} />
                <Tab sx={{mx: 1, color:'primary.main'}} label="SUM UP" {...a11yProps(4)} />
                <Tab onClick={Price()} sx={{mx: 4, color:'primary.main'}} label="INVOICE REPORT" {...a11yProps(5)} />
            </Tabs></Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{width : 100}}><Button onClick={Logout}>LOG OUT</Button> </Box>
        </Box>
      <TabPanel value={value} index={0}>

          <Box>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>Size</Button></Box>

              <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                  <Box onClick={SelectS} border={S} sx={{my:1,width:525}} component="img" alt="pS" src={pS}></Box>
                  <Box onClick={SelectM} border={M} sx={{my:1,width:525}} component="img" alt="pM" src={pM}></Box>
                  <Box onClick={SelectL} border={L} sx={{my:1,width:525}} component="img" alt="pL" src={pL}></Box>
                  <Box onClick={SelectXL} border={XL} sx={{my:1,width:525}} component="img" alt="pXL" src={pXL}></Box>
                  <Box onClick={SelectXXL} border={XXL} sx={{my:1,width:525}} component="img" alt="pXXL" src={pXXL}></Box>
              </Box>
          </Box>

      </TabPanel>
      <TabPanel value={value} index={1}>

        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTERIOR PAINT CORRECTION</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectX} border={X} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pX"  src={pX}></Box><Box sx={{mx:2}}>{Size.X.toLocaleString()}</Box></Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectY} border={Y} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pY"  src={pY}></Box><Box sx={{mx:2}}>{Size.Y.toLocaleString()}</Box></Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectZ} border={Z} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pZ"  src={pZ}></Box><Box sx={{mx:2}}>{Size.Z.toLocaleString()}</Box></Box>
            </Box>
        </Box>

      </TabPanel>
      <TabPanel value={value} index={2}>
        
        {/*STEP 2*/}
        <Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>BODY CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectA} border={A} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA"  src={pA}></Box><Box sx={{mx:2}}>{Size.A.toLocaleString()}</Box></Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectB} border={B} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB"  src={pB}></Box><Box sx={{mx:2}}>{Size.B.toLocaleString()}</Box></Box>
                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" onClick={SelectC} border={C} sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC"  src={pC}></Box><Box sx={{mx:2}}>{Size.C.toLocaleString()}</Box></Box>
            </Box>
        </Box>

      </TabPanel>
      <TabPanel value={value} index={3}>
         {/*STEP 3 for A*/}
         <Box>{A === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectE1(pA1,Size.A1,"DiscountPricePA1")} border={E1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA1"  src={pA1}></Box><Box sx={{mx:2}}>
                  {Size.A1.toLocaleString()}
                  {Extra1!==pA1&&(
                    localStorage.setItem("DiscountPricePA1",(""))
                  )}
                  </Box>
                  </Box>
                <Box onClick={()=>SelectE21(pA21,Size.A21,"DiscountPricePA21")} border={E21} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA21"  src={pA21}></Box><Box sx={{mx:2}}>{Size.A21.toLocaleString()}
                {Extra21!==pA21&&(
                    localStorage.setItem("DiscountPricePA21",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE22(pA22,Size.A22,"DiscountPricePA22")} border={E22} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA22"  src={pA22}></Box><Box sx={{mx:2}}>{Size.A22.toLocaleString()}
                {Extra22!==pA22&&(
                    localStorage.setItem("DiscountPricePA22",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE31(pA31,Size.A31,"DiscountPricePA31")} border={E31} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA31"  src={pA31}></Box><Box sx={{mx:2}}>{Size.A31.toLocaleString()}
                {Extra31!==pA31&&(
                    localStorage.setItem("DiscountPricePA31",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE32(pA32,Size.A32,"DiscountPricePA32")} border={E32} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pA32"  src={pA32}></Box><Box sx={{mx:2}}>{Size.A32.toLocaleString()}
                {Extra32!==pA32&&(
                    localStorage.setItem("DiscountPricePA32",(""))
                  )}
                </Box>
                </Box>
            </Box>
        </Box>)}</Box>

        {/*STEP 3 for B*/}
        <Box>{B === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectE1(pB1,Size.B1,"DiscountPricePB1")} border={E1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB1"  src={pB1}></Box><Box sx={{mx:2}}>{Size.B1.toLocaleString()}
                {Extra1!==pB1&&(
                    localStorage.setItem("DiscountPricePB1",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE21(pB21,Size.B21,"DiscountPricePB21")} border={E21} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB21"  src={pB21}></Box><Box sx={{mx:2}}>{Size.B21.toLocaleString()}
                {Extra21!==pB21&&(
                    localStorage.setItem("DiscountPricePB21",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE22(pB22,Size.B22,"DiscountPricePB22")} border={E22} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB22"  src={pB22}></Box><Box sx={{mx:2}}>{Size.B22.toLocaleString()}
                {Extra22!==pB22&&(
                    localStorage.setItem("DiscountPricePB22",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE31(pB31,Size.B31,"DiscountPricePB31")} border={E31} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB31"  src={pB31}></Box><Box sx={{mx:2}}>{Size.B31.toLocaleString()}
                {Extra31!==pB31&&(
                    localStorage.setItem("DiscountPricePB31",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE32(pB32,Size.B32,"DiscountPricePB32")} border={E32} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pB32"  src={pB32}></Box><Box sx={{mx:2}}>{Size.B32.toLocaleString()}
                {Extra32!==pB32&&(
                    localStorage.setItem("DiscountPricePB32",(""))
                  )}
                </Box>
                </Box>
            </Box>
        </Box>)}</Box>

        {/*STEP 3 for C*/}
        <Box>{C === 1 && (<Box>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{height: 100, width: '100%' }}><Button>EXTRA CERAMIC</Button></Box>

            <Box display="flex"flexDirection="column" justifyContent="center" alignItems="center" sx={{width: '100%' }}>
                <Box onClick={()=>SelectE1(pC1,Size.C1,"DiscountPricePC1")} border={E1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC1"  src={pC1}></Box><Box sx={{mx:2}}>{Size.C1.toLocaleString()}
                {Extra1!==pC1&&(
                    localStorage.setItem("DiscountPricePC1",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE21(pC21,Size.C21,"DiscountPricePC21")} border={E21} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC21"  src={pC21}></Box><Box sx={{mx:2}}>{Size.C21.toLocaleString()}
                {Extra21!==pC21&&(
                    localStorage.setItem("DiscountPricePC21",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE22(pC22,Size.C22,"DiscountPricePC22")} border={E22} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC22"  src={pC22}></Box><Box sx={{mx:2}}>{Size.C22.toLocaleString()}
                {Extra22!==pC22&&(
                    localStorage.setItem("DiscountPricePC22",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE31(pC31,Size.C31,"DiscountPricePC31")} border={E31} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC31"  src={pC31}></Box><Box sx={{mx:2}}>{Size.C31.toLocaleString()}
                {Extra31!==pC31&&(
                    localStorage.setItem("DiscountPricePC31",(""))
                  )}
                </Box>
                </Box>
                <Box onClick={()=>SelectE32(pC32,Size.C32,"DiscountPricePC32")} border={E32} display="flex" flexDirection="row" justifyContent="center" alignItems="center" sx={{my:1, backgroundColor:'#424242'}}><Box sx={{my:1,width:525}} component="img" alt="pC32"  src={pC32}></Box><Box sx={{mx:2}}>{Size.C32.toLocaleString()}
                {Extra32!==pC32&&(
                    localStorage.setItem("DiscountPricePC32",(""))
                  )}
                </Box>
                </Box>
            </Box>
        </Box>)}</Box>
      </TabPanel>

      <TabPanel value={value} index={4}>
      <header id="step4">
      <Box sx={{ width: "100%", height: 2100, backgroundColor: "white" }}>
      <Box display="flex" flexDirection="row" >
              <Box>
                <img className="imglogostep4" component="img" alt="logostep4" src={logostep4} height="60" width="80"></img>
              </Box>
              <Box flexGrow={1}></Box>
              <Box> <h1 className="navebar">CERAMIC DESIGN</h1> </Box>
            </Box>
            <Box className="textcus" display="flex" flexDirection="row">
               <Box sx={{mx:5}}>
                 <h1>ข้อมูลลูกค้า</h1>
               </Box>
               <Box display="flex" flexGrow={1}></Box>
               <Box sx={{mx:33}}>
                 <h1>ข้อมูลรถ</h1>
               </Box>
            </Box>
            <div>
            <Box  component="form" sx={{"& .MuiTextField-root": { m: 1, width: "40ch" },}}>
            <Box display="flex" flexDirection="row">
            <Box sx={{ mx: 3, my: 0 }} display="flex" flexDirection="column">
            <TextField 
            color="three" 
            label="ชื่อลูกค้า"
            id="outlined-size-small1"
            value={inputName}
                 onChange={(event) => {
                  setinputName(event.target.value);}}
                 required="required"
                 size="small">
            </TextField>
            <TextField
               color="three"
               value={inpuTel}
                 label="เบอร์โทร"
                 id="outlined-size-small2"
                 onChange={(event) => {
                  setinputTel(event.target.value);}}
                 required="required"
                 size="small"
               />
               <TextField
               color="three"
               value={inpuLine}
                 label="Line Id"
                 onChange={(event) => {
                  setinputLine(event.target.value);}}
                 id="outlined-size-small3"
                 required="required"
                 defaultValue=""
                 size="small"
               />
             </Box>
             <Box flexGrow={1}></Box>
             <Box sx={{ mx: 3, my: 0 }} display="flex" flexDirection="column">
               <TextField
               color="three"
               onChange={(event) => {
                setinputNamecar(event.target.value);}}
                 label="รุ่นรถ"
                 value={inpuNamecar}
                 id="outlined-size-small4"
                 required="required"
                 defaultValue=""
                 size="small"
               />
               <TextField
               color="three"
               onChange={(event) => {
                setinputColorcar(event.target.value);}}
                 label="สีรถ"
                 id="outlined-size-small5"
                 value={inpuColorcar}
                 required="required"
                 defaultValue=""
                 size="small"
               />
               <TextField
               color="three"
               onChange={(event) => {
                setinputCarlicense(event.target.value);}}
                 label="ทะเบียนรถ"
                 id="outlined-size-small6"
                 value={inputCarlicense}
                 required="required"
                 defaultValue=""
                 size="small"
               />
            </Box>
            </Box>
            </Box>
            </div>
            <Container maxWidth="xl">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
             <TableRow>
               <TableCell align="center"><h4>ITEM</h4></TableCell>
               <TableCell align="center"><h4>Price</h4></TableCell>
               <TableCell align="center"><h4>Discount Price</h4></TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
           <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           <TableCell  className="imgitem" align="center"> {/*//& ตารางรูป*/}
           <Box display="flex" flexDirection="column"  alignItems="center">
              <Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Course} src={Course}></Box>
              <Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Body} src={Body}></Box>
              {Extra1 !== 0 && (<Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Extra1} src={Extra1}></Box>)}
              {Extra21 !== 0 && (<Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Extra21} src={Extra21}></Box>)}
              {Extra22 !== 0 && (<Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Extra22} src={Extra22}></Box>)}
              {Extra31 !== 0 && (<Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Extra31} src={Extra31}></Box>)}
              {Extra32 !== 0 && (<Box sx={{my:2,width:"500px",border:"solid"}} component="img" alt={Extra32} src={Extra32}></Box>)}
              </Box>
           </TableCell>
           <TableCell classname="priceitem" align="center"> {/*//^ราคา Item*/} 
            <>
            {Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
              <>
              <h4>{CoursePrice.toLocaleString()}</h4>
              <Box sx={{my:33}}></Box>
              <h4>{BodyPrice.toLocaleString()}</h4>
              </>
            )}
              {Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra21===0&&Extra1===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                </>
              )}
              {Extra31!==0&&Extra21===0&&Extra22===0&&Extra1===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra32!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra1===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra31===0&&Extra22===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra31===0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra31!==0&&Extra32===0&&Extra22===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra32!==0&&Extra31===0&&Extra22===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra32!==0&&Extra31===0&&Extra1===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra31!==0&&Extra1===0&&Extra32===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra31!==0&&Extra1===0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra32!==0&&Extra31===0&&Extra1===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra31!==0&&Extra32===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra32!==0&&Extra31===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra31!==0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra32!==0&&Extra31===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:33}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
             
            </>
           

           </TableCell>
           <TableCell classname="inputitem" align="center"> {/*//!ลดราคา Item*/}

           {Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
              <>
              <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label={CoursePrice}
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label={BodyPrice}
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:0}}></Box>
              </>
            )}
            {Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <Box>
                <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}

              {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
               {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
               {Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra21===pA21){
                                  setinputDiscountpa21(event.target.value);
                                  console.log(inputDiscountpa21)
                                }else if(Extra21===pB21){
                                  setinputDiscountpb21(event.target.value);
                                  console.log(inputDiscountpb21)
                                }else if(Extra21===pC21){
                                  setinputDiscountpc21(event.target.value);
                                  console.log(inputDiscountpc21)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP21)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra31===pA31){
                                  setinputDiscountpa31(event.target.value);
                                  console.log(inputDiscountpa31)
                                }else if(Extra31===pB31){
                                  setinputDiscountpb31(event.target.value);
                                  console.log(inputDiscountpb31)
                                }else if(Extra31===pC31){
                                  setinputDiscountpc31(event.target.value);
                                  console.log(inputDiscountpc31)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP31)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
              {Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&&(
                <>
                <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                color="three"
                                alignItems="center"
                                onChange={(event) => {
                                  if(Course===pX){
                                    setinputDiscountpx(event.target.value);
                                  }else if(Course===pY){
                                    setinputDiscountpy(event.target.value);
                                  }else if(Course===pZ){
                                    setinputDiscountpz(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(CoursePriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {
                                  if(Body===pA){
                                    setinputDiscountpa(event.target.value);
                                  }else if(Body===pB){
                                    setinputDiscountpb(event.target.value);
                                  }else if(Body===pC){
                                    setinputDiscountpc(event.target.value);
                                  }
                                  }}
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue={localStorage.getItem(BodyPriceIP)}
                                size="small"/>
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra1===pA1){
                                  setinputDiscountpa1(event.target.value);
                                  console.log(inputDiscountpa1)
                                }else if(Extra1===pB1){
                                  setinputDiscountpb1(event.target.value);
                                  console.log(inputDiscountpb1)
                                }else if(Extra1===pC1){
                                  setinputDiscountpc1(event.target.value);
                                  console.log(inputDiscountpc1)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP1)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra22===pA22){
                                  setinputDiscountpa22(event.target.value);
                                  console.log(inputDiscountpa22)
                                }else if(Extra22===pB22){
                                  setinputDiscountpb22(event.target.value);
                                  console.log(inputDiscountpb22)
                                }else if(Extra22===pC22){
                                  setinputDiscountpc22(event.target.value);
                                  console.log(inputDiscountpc22)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP22)}
                                size="small"/>
                                
                             </Box>
                             <Box sx={{my:28}}></Box>
                             <Box>
                               <TextField
                               sx={{ m: 1, width: "15ch",}}
                               className="textpx"
                               pattern="\d*[,.]\d+|\d+(?:[,.]\d*)?"
                                label="Discount Price"
                                type="number"
                                alignItems="center"
                                color="text"
                                onChange={(event) => {if(Extra32===pA32){
                                  setinputDiscountpa32(event.target.value);
                                  console.log(inputDiscountpa32)
                                }else if(Extra32===pB32){
                                  setinputDiscountpb32(event.target.value);
                                  console.log(inputDiscountpb32)
                                }else if(Extra32===pC32){
                                  setinputDiscountpc32(event.target.value);
                                  console.log(inputDiscountpc32)
                                }
                                }
                                }
                                 required="required"
                                id="outlined-size-small1"
                                defaultValue= {localStorage.getItem(ExtraIP32)}
                                size="small"/>
                                
                             </Box>
                             
                             <Box sx={{my:0}}></Box>
                             
                </>
              )}
           </TableCell>
            </TableRow>
           </TableBody>
           <TableHead>  
           <TableRow>
           <TableCell align="center"><h4>TOTAL</h4></TableCell>
            <TableCell align="center"><h4>{Sum.toLocaleString()} ฿</h4></TableCell>
            <TableCell align="center">
             
              {/* //*ส่วนลด px py pz  */}
              {Course===pX&&Body===pA&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด px py pz&pa pb pc  */}

              {/* //*ส่วนลด px pa a */}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด px pa a */}

              {/* //*ส่วนลด px pb b */}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด px pb b */}

              {/* //*ส่วนลด px pc c */}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด px pc c */}

              {/* //*ส่วนลด py pa a */}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด py pa a */}

              {/* //*ส่วนลด py pb b */}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด py pb b */}

              {/* //*ส่วนลด py pc c */}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด py pc c */}

              {/* //*ส่วนลด pz pa a */}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด pz pa a */}

              {/* //*ส่วนลด pz pb b */}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด pz pb b */}

              {/* //*ส่วนลด pz pc c */}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra22!==0&&Extra1===0&&Extra21===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra31!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra32!==0&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด pz pc c */}

              {/* //*ส่วนลด px pa a a */}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด px pa a a */}

              {/* //*ส่วนลด px pb b b */}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}

              {/* //*ส่วนลด px pb b b */}
              {/* //*ส่วนลด px pc c c */}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pX&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpx!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpx) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}

              {/* //*ส่วนลด px pc c c */}

              {/* //*ส่วนลด py pa a a */}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด py pa a a */}

              {/* //*ส่วนลด py pb b b */}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}

              {/* //*ส่วนลด py pb b b */}
              {/* //*ส่วนลด py pc c c */}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pY&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpy!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpy) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}

              {/* //*ส่วนลด py pc c c */}
              {/* //*ส่วนลด pz pa a a */}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa21!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa21)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pA&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpa!==""&&inputDiscountpa1!==""&&inputDiscountpa22!==""&&inputDiscountpa32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpa)+parseInt(inputDiscountpa1)+parseInt(inputDiscountpa22)+parseInt(inputDiscountpa32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด pz pa a a */}

              {/* //*ส่วนลด pz pb b b */}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb21!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb21)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pB&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpb!==""&&inputDiscountpb1!==""&&inputDiscountpb22!==""&&inputDiscountpb32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpb)+parseInt(inputDiscountpb1)+parseInt(inputDiscountpb22)+parseInt(inputDiscountpb32)).toLocaleString()} ฿</h4>
                
              )}

              {/* //*ส่วนลด pz pb b b */}
              {/* //*ส่วนลด pz pc c c */}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc21!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc21)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc31!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc31)).toLocaleString()} ฿</h4>
                
              )}
              {Course===pZ&&Body===pC&&Extra1!==0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&& inputDiscountpz!==""&&inputDiscountpc!==""&&inputDiscountpc1!==""&&inputDiscountpc22!==""&&inputDiscountpc32!==""&&(
                <h4>{(parseInt(inputDiscountpz) + parseInt(inputDiscountpc)+parseInt(inputDiscountpc1)+parseInt(inputDiscountpc22)+parseInt(inputDiscountpc32)).toLocaleString()} ฿</h4>
                
              )}
              {/* //*ส่วนลด pz pc c c */}
                
         



            </TableCell>
           </TableRow>
            
            </TableHead>
            </Table>
            <Box
           component="form"
           sx={{
             "& .MuiTextField-root": { m: 1, width: "100ch" },
           }}
           noValidate
           autoComplete="off"
         >
           <Box sx={{ my: 2 }} display="flex" justifyContent="center">
             <TextField className="boxcomment"
             color="three"
             onChange={(event) => {
              setinputComment(event.target.value);}}
             required="required"
               id="outlined-multiline-static"
               label="Comment"
               multiline
               rows={5}
               defaultValue={inputComment}
             />
           </Box>
    </Box>
            </Container>

      </Box>
        
     


      </header>
           
      </TabPanel>

      <TabPanel value={value} index={5}>
            {/*Test Report Variable*/}
            <header id="report">
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: "100%", backgroundColor: "white", color: "black" }}
          >
            <Box display="flex" flexDirection="row" >
              <Box>
                <img className="imglogostep4" component="img" alt="logostep4" src={logostep4} height="60" width="80"></img>
              </Box>
              <Box flexGrow={1}></Box>
              <Box> <h1 className="navebar2">CERAMIC DESIGN</h1> </Box>
            </Box>

            <Box className="textcus2" display="flex" flexDirection="row">
               <Box sx={{mx:5}}>
                 <h1>ข้อมูลลูกค้า</h1>
               </Box>
               <Box display="flex" flexGrow={1}></Box>
               <Box sx={{mx:21}}>
                 <h1>ข้อมูลรถ</h1>
               </Box>
            </Box>
            <Box  component="form" sx={{"& .MuiTextField-root": { m: 1, width: "40ch" },}}
    >
      <Box display="flex" flexDirection="row">
        <Box sx={{ mx: 3, my: -2 }} display="flex" flexDirection="column">
          <Typography flexDirection="row" display="flex">
            <h1 className="namecus">ชื่อลูกค้า:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inputName}</h1></Box>
          </Typography>
          <Typography sx={{my:-6}} flexDirection="row" display="flex">
            <h1 className="namecus">เบอร์โทร:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inpuTel}</h1></Box>
          </Typography>
          <Typography sx={{my:0}} flexDirection="row" display="flex">
            <h1 className="namecus">Line Id:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inpuLine}</h1></Box>
          </Typography>
        </Box>
        <Box flexGrow={1}></Box>
        <Box sx={{ mx: 15, my: -2 }} display="flex" flexDirection="column">
        <Typography sx={{my:0}} flexDirection="row" display="flex">
            <h1 className="namecus">รุ่นรถ:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inpuNamecar}</h1></Box>
          </Typography>
          <Typography sx={{my:-6}} flexDirection="row" display="flex">
            <h1 className="namecus">สีรถ:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inpuColorcar}</h1></Box>
          </Typography>
          <Typography sx={{my:0}} flexDirection="row" display="flex">
            <h1 className="namecus">ทะเบียนรถ:</h1>
            <Box sx={{ mx:-1}}><h1 className="textuser">{inputCarlicense}</h1></Box>
          </Typography>
        </Box>
      </Box>
    </Box>
    <Container maxWidth="xl">  
        <Table sx={{ minWidth: 650 ,my:-1.5 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h4>ITEM</h4></TableCell>
            <TableCell align="center"><h4>Price</h4></TableCell>
            <TableCell align="center"><h4>Discount Price</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className="imgitem" align="center"> {/*//& ตารางรูป*/}
           <Box display="flex" flexDirection="column"  alignItems="center">
              <Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Course} src={Course}></Box>
              <Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Body} src={Body}></Box>
              {Extra1 !== 0 && (<Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Extra1} src={Extra1}></Box>)}
              {Extra21 !== 0 && (<Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Extra21} src={Extra21}></Box>)}
              {Extra22 !== 0 && (<Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Extra22} src={Extra22}></Box>)}
              {Extra31 !== 0 && (<Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Extra31} src={Extra31}></Box>)}
              {Extra32 !== 0 && (<Box sx={{my:0.5,width:"250px",border:"solid"}} component="img" alt={Extra32} src={Extra32}></Box>)}
              </Box>
           </TableCell>
           <TableCell classname="priceitem" align="center"> {/*//^ราคา Item*/} 
            <>
            {Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
              <>
              <h4>{CoursePrice.toLocaleString()}</h4>
              <Box sx={{my:15}}></Box>
              <h4>{BodyPrice.toLocaleString()}</h4>
              </>
            )}
              {Extra1!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra1===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra21===0&&Extra1===0&&Extra31===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                </>
              )}
              {Extra31!==0&&Extra21===0&&Extra22===0&&Extra1===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra32!==0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra1===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra31===0&&Extra22===0&&Extra32===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra31===0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra31!==0&&Extra32===0&&Extra22===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra32!==0&&Extra31===0&&Extra22===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra32!==0&&Extra31===0&&Extra1===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra21!==0&&Extra31!==0&&Extra1===0&&Extra32===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra31!==0&&Extra1===0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra22!==0&&Extra32!==0&&Extra31===0&&Extra1===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra31!==0&&Extra32===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra21!==0&&Extra32!==0&&Extra31===0&&Extra22===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP21.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra31!==0&&Extra32===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP31.toLocaleString()}</h4>
                </>
              )}
              {Extra1!==0&&Extra22!==0&&Extra32!==0&&Extra31===0&&Extra21===0&&(
                <>
                <h4>{CoursePrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{BodyPrice.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP1.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP22.toLocaleString()}</h4>
                <Box sx={{my:15}}></Box>
                <h4>{ExtraP32.toLocaleString()}</h4>
                </>
              )}
             
            </>
           

           </TableCell>
           <TableCell classname="inputitem" align="center"> {/*ลดราคา Item*/}
                 {Course!==0&&(
                  <>
                  {ValueCourseIP===""&&(
                    <>
                    <Box><h4>{CoursePrice.toLocaleString()}</h4></Box>
                    <Box sx={{my:15}}></Box>
                     </>
                  )}
                  {ValueCourseIP!==""&&(
                    <>
                     <Box><h4>{parseInt(localStorage.getItem(CoursePriceIP)).toLocaleString()}</h4></Box>
                     <Box sx={{my:15}}></Box> 
                     </>
                  )}
                 
                  </>
                 )}
                 {Body!==0&&(
                   <>
                   {ValueBodyIP===""&&(
                     <>
                     <Box sx={{my:15}}></Box>
                     <Box><h4>{BodyPrice.toLocaleString()}</h4></Box>
                     
                      </>
                   )}
                   {ValueBodyIP!==""&&(
                     <>
                     <Box sx={{my:15}}></Box> 
                      <Box><h4>{parseInt(localStorage.getItem(BodyPriceIP)).toLocaleString()}</h4></Box>

                      </>
                   )}
                  
                   </>
                 )}
                 {Extra1!==0&&(
                   <>
                    {ValueExtraIP1=== ""&&(
                     <>
                     <Box sx={{my:15}}></Box>
                     <Box><h4>{ExtraP1.toLocaleString()}</h4></Box>
                     
                      </>
                   )}
                   {ValueExtraIP1!== ""&&(
                     <>
                     <Box sx={{my:15}}></Box> 
                      <Box><h4>{parseInt(localStorage.getItem(ExtraIP1)).toLocaleString()}</h4></Box>
                      </>
                   )}
                   </>
                 )}
                 {Extra21!==0&&(
                    <>
                    {ValueExtraIP21=== ""&&(
                     <>
                     <Box sx={{my:15}}></Box>
                     <Box><h4>{ExtraP21.toLocaleString()}</h4></Box>
                     
                      </>
                   )}
                   {ValueExtraIP21!== ""&&(
                     <>
                     <Box sx={{my:15}}></Box> 
                      <Box><h4>{parseInt(localStorage.getItem(ExtraIP21)).toLocaleString()}</h4></Box>
                      </>
                   )}
                   </>
                 )}
                 {Extra22!==0&&(
                   <>
                   {ValueExtraIP22=== ""&&(
                    <>
                    <Box sx={{my:15}}></Box>
                    <Box><h4>{ExtraP22.toLocaleString()}</h4></Box>
                    
                     </>
                  )}
                  {ValueExtraIP22!== ""&&(
                    <>
                    <Box sx={{my:15}}></Box> 
                     <Box><h4>{parseInt(localStorage.getItem(ExtraIP22)).toLocaleString()}</h4></Box>
                     </>
                  )}
                  </>
                 )}
                 {Extra31!==0&&(
                    <>
                    {ValueExtraIP31=== ""&&(
                     <>
                     <Box sx={{my:15}}></Box>
                     <Box><h4>{ExtraP31.toLocaleString()}</h4></Box>
                     
                      </>
                   )}
                   {ValueExtraIP1!== ""&&(
                     <>
                     <Box sx={{my:15}}></Box> 
                      <Box><h4>{parseInt(localStorage.getItem(ExtraIP31)).toLocaleString()}</h4></Box>
                      </>
                   )}
                   </>
                 )}
                 {Extra32!==0&&(
                   <>
                   {ValueExtraIP32=== ""&&(
                    <>
                    <Box sx={{my:15}}></Box>
                    <Box><h4>{ExtraP32.toLocaleString()}</h4></Box>
                    
                     </>
                  )}
                  {ValueExtraIP32!== ""&&(
                    <>
                    <Box sx={{my:15}}></Box> 
                     <Box><h4>{parseInt(localStorage.getItem(ExtraIP32)).toLocaleString()}</h4></Box>
                     </>
                  )}
                  </>
                 )}
              </TableCell>
            </TableRow>
        </TableBody>
        <TableHead>
          <TableRow>
          <TableCell align="center">TOTAL</TableCell>
            <TableCell align="center"><h4>{Sum.toLocaleString()} ฿</h4></TableCell>
            <TableCell align="center">
              {Course!==0&&Body!==0&&ValueCourseIP !== ""&&ValueBodyIP !==""&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP21)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP22)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32===0&&ValueExtraIP1  !== ""&&ValueExtraIP21 !==""&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP21)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP22)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP21)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP21)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
               {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP22)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
              {Extra1===0&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP22)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&ValueExtraIP21 !==""&&Extra21!==0&&Extra22===0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP21)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&ValueExtraIP21 !==""&&Extra21!==0&&Extra22===0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP21)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22!==0&&Extra31!==0&&Extra32===0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP22)+ parseInt(ValueExtraIP31)).toLocaleString()} ฿</h4>
              )}
              {Extra1!==0&&ValueExtraIP1  !== ""&&Extra21===0&&Extra22!==0&&Extra31===0&&Extra32!==0&&(
                <h4>{(parseInt(ValueCourseIP) + parseInt(ValueBodyIP)+ parseInt(ValueExtraIP1)+ parseInt(ValueExtraIP22)+ parseInt(ValueExtraIP32)).toLocaleString()} ฿</h4>
              )}
           
           {ValueCourseIP === ""&&ValueBodyIP ===""&&Extra1===0&&Extra21===0&&Extra22===0&&Extra31===0&&Extra32===0&&(
              <h4>{(parseInt(CoursePrice) + parseInt(BodyPrice)).toLocaleString()} ฿</h4>
           )}
           {ValueExtraIP1  === ""&&(
              <h4>{(parseInt(CoursePrice) + parseInt(BodyPrice)+ parseInt(ExtraP1)).toLocaleString()} ฿</h4>
           )}
           
           {ValueExtraIP1  === ""&&ValueExtraIP21 ===""&&(
              <h4>{(parseInt(CoursePrice) + parseInt(BodyPrice)+ parseInt(ExtraP1)+ parseInt(ExtraP21)).toLocaleString()} ฿</h4>
           )}


           
              
            
            
            </TableCell>
          </TableRow>
        </TableHead>
        </Table>
        
        <div style={{ width: '100%' }}>
          <Box sx={{my:2}}></Box>
        <lable>Comment</lable>
      <Box
        sx={{display: 'flex',m: 1,p: 5,bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),color: (theme) =>theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',border: '1px solid',
          borderColor: (theme) =>theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',borderRadius: 2,fontSize: '0.875rem',fontWeight: '700',
        }}
      >
        {<>{inputComment}</>}
      </Box>
      
    </div>
        
        </Container>
          </Box>

        </header> 
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ my: 3 }}>
              <Button variant="outlined" onClick={DownloadPDF}><PrintIcon/>&nbsp; Export PDF</Button>
            </Box>
      </TabPanel>
      

    </Box>
  );
}
