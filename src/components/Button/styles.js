import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: 50px;
    border-radius: 4px;
    background: #f94d6a;

    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    height: 24px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    font-family: Helvetica-Bold;
`;
