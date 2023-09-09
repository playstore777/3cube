import React from 'react';
import approvalIcon from '../../../assets/icons/approval.svg';
import retailBusinessImg from '../../../assets/home/retail-business-pic.svg';
import enterpriseImg from '../../../assets/home/enterprise-business-pic.svg';
import flexibleRepaymentIcon from '../../../assets/icons/flexible-repayment.svg';
import higherLoanIcon from '../../../assets/icons/higher-loan-icon.svg';
import longerLoanTenureIcon from '../../../assets/icons/longer-loan-tenure.svg';

const Features = () => {
    const features = [
        {
            bgColor: '#242537',
            bgImg : '',
            content : (
                <div className='w-full h-full flex flex-col justify-center p-[15px] text-left'>
                    <h2 className='text-white text-[24px] tracking-[1px] '>We are proud of our works</h2>
                    <p className='text-[#0065A8] text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    <p className='text-white text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore 
                    </p>
                </div>
            )
        },
        {
            bgColor: '#D9D9D9',
            bgImg : '',
            content : (
                <div className='w-full h-full flex flex-col justify-center text-black items-center text-center'>
                    <img src={approvalIcon} alt="approval icon" className='w-[50px] h-[50px]'/>
                    <h2 className='text-[22px] text-black py-[8px]'>Instant Approval</h2>
                    <p className='text-[#4D4F64] py-[8px]'>
                        “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            )

        },
        {
            bgColor : '',
            bgImg : retailBusinessImg,
            content : (
                <div className='w-full h-full flex flex-col justify-center text-white items-center text-center'>
                    <h2 className='text-[25px] font-bold'>Retail Business</h2>
                </div>
            )
        },
        {
            bgColor : '#0065A8',
            bgImg : '',
            content : (
                <div className='w-full h-full text-right flex flex-col text-white justify-center items-end'>
                    <p className='text-[16px] pr-[3%]'>Financial Consulting</p>
                    <div className='h-[15px] rounded-[5px] w-[95%] mx-auto my-[12px] bg-white'>
                            <div className='percent w-[70%] rounded-[5px] h-full bg-black'></div>
                    </div>
                    <p className='text-[16px] pr-[3%]'>Advisory Solutions</p>
                    <div className='h-[15px] rounded-[5px] w-[94%] mx-auto my-[12px] bg-white'>
                            <div className='percent w-[80%] rounded-[5px] h-full bg-black'></div>
                    </div>
                    <p className='text-[16px] pr-[3%]'>Short Term Loans</p>
                    <div className='h-[15px] rounded-[5px] w-[95%] mx-auto my-[12px] bg-white'>
                            <div className='percent w-[89%] rounded-[5px] h-full bg-black'></div>
                    </div>
                </div>
            )
        },
        {
            bgColor : '',
            bgImg: enterpriseImg,
            content : (
                <div className='w-full h-full flex flex-col justify-center text-white items-center text-center'>
                    <h2 className='text-[25px] font-bold'>Enterprise Business</h2>
                </div>
            )
        },
        {
            bgColor : '#0065A8',
            bgImg : '',
            content : (
                
                <div className='w-full h-full text-center flex flex-col text-white justify-center items-center'>
                    <img src={flexibleRepaymentIcon} alt="flexible repayment icon" className='w-[40px] h-[30px]'/>
                    <h2 className='text-[22px] py-[8px]'>Flexible Repayment</h2>
                    <p className='py-[8px]'>
                        “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            )
        },
        {
            bgColor :'#242537',
            bgImg : '',
            content : (
                <div className='w-full h-full text-center flex flex-col text-white justify-center items-center'>
                    <img src={higherLoanIcon} alt="Higher Loan icon" className='w-[40px] h-[35px]'/>
                    <h2 className='text-[22px] py-[8px]'>Higher Loan Amount</h2>
                    <p className='py-[8px]'>
                        “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            )
        },
        {
            bgColor : '#D9D9D9',
            bgImg : '',
            content : (
                <div className='w-full h-full text-center flex flex-col text-white justify-center items-center'>
                    <img src={longerLoanTenureIcon} alt="Longer Loan Tenure icon" className='w-[40px] h-[35px]'/>
                    <h2 className='text-[22px] text-black py-[8px]'>Longer Loan Tenure</h2>
                    <p className='py-[8px] text-[#4D4F64]'>
                        “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            )
        }
    ];
    return (
        <div className='w-full h-auto'>
            <div className='grid grid-cols-4'>
                {
                    features.map((feature, index) => {
                        return(
                            <div>
                                <div 
                                    className='h-[300px] w-[100%]' 
                                    style={{
                                        backgroundColor: feature.bgColor ?? '',
                                        backgroundImage: `url(${feature.bgImg})` ?? '',
                                        backgroundPosition: feature.bgImg ? 'center' : '',
                                        backgroundSize: feature.bgImg ? 'cover' : '',
                                        backgroundRepeat: feature.bgImg ? 'no-repeat' : '',
                                    }}>
                                    {feature.content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Features