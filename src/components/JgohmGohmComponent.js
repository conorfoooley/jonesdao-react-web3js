import { Button, Col, Container, Row } from "react-bootstrap";
import '../style/scss/JonesComponent.scss';
// import stakingJones from '../style/images/staking-jones.webp';
import jgohmGohm from '../style/images/jgohm-gohm.webp';
import { BsArrowUpRight } from "react-icons/bs";

const jgohmGohmComponent = () => {
    return (
        <div>
            <Row className="px-5 mt-3">
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex justify-content-between pb-3">
                        <div>Your stake</div>
                        <div><span className="text-white-50">jgOHM-gOHM </span>0.00</div>
                    </div>
                    <div className="climable-div">
                        <div className="d-flex justify-content-between px-3 py-2 climable border-gradient">
                            <div>Claimable</div>
                            <div><span className="text-white-50">Jones </span>0.00</div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <a className="learn-txt" href="https://www.sushi.com/earn/arb1:0x292d1587a6bb37e34574c9ad5993f221d8a5616c/remove" 
                                    target="_blank">
                                Remove liquidity<BsArrowUpRight />
                        </a>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="flex-column px-3 py-3">
                    <div className="d-flex gap-4 pb-3">
                        
                        <div className="mouseovered active">Unstake</div>
                    </div>
                    <div className="p-2 d-flex justify-content-between pt-2 px-4 jones-stake-div">
                        <div className="fs-5 text-white-50">
                            0.00
                        </div>
                        <div className="d-flex flex-column">
                            <div className="ms-auto fs-6">
                                <img src={jgohmGohm} width={"35px"} className="me-2"></img>
                                    jgOHM-gOHM
                            </div>
                            <div className="d-flex gap-2 mt-2 justify-content-end">
                                <div className="fs-5-custom fw-bold text-white-50">Balance: 0.00</div>
                                <div className="balance-btn-div d-flex gap-1 align-items-center fs-5-custom">
                                    <div>
                                        <span className="balance-btn fw-bolder">
                                            Max
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="fw-bolder rounded-3 mt-3 d-flex justify-content-center text-black fs-5 py-2 jones-connect-div  mouseovered">
                        Connect Wallet
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default jgohmGohmComponent;