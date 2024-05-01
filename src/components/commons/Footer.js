import Card from 'react-bootstrap/Card';
import "./Commons.css";


function HeaderAndFooterExample() {
    return (
        <div id="footer-page">
            <Card className="text-center">
                <Card.Header>주식회사:방그레</Card.Header>
                    <Card.Body>
                        <Card.Title>찾아 오시는 길</Card.Title>
                            <Card.Text>
                            경기도 남양주시 다산동 4344-3 / 경기도 남양주시 다산순환로 45(다산동)
                            </Card.Text>
                            <Card.Text id="footer-text">
                            ‘㈜빙그레’은(이하‘회사’는) 고객님의 개인 정보를 중요시하며,
                            개인정보 보호를 위해 『개인정보보호법』, 『정보통신망 이용 촉진 및 정보보호 등에 관한 법률』 등
                            관련 법령과 규정을 준수하고 있습니다.

                            회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가
                            어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드리며,
                            당사의 개인정보보호 정책 목표인 개인 정보 유출 및 피해 제로화를 위해 최선을 다하겠습니다.
                            </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted">Copyright ©2024 All rights reserved | This template is made with  by team1</Card.Footer>
            </Card>
        </div>
    );
}

export default HeaderAndFooterExample;