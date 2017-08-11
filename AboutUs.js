import React from "react";
import PageFactory from "../PageFactory";
import Page from "../components/Page";

class ThisPage extends React.Component {
    render() {
        return (
            <Page>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel auctor dolor. Etiam dignissim, eros at fermentum posuere, tellus lacus tristique purus, a eleifend quam ante at orci. Aenean vestibulum non nisi efficitur tincidunt. Pellentesque sed lectus metus. Curabitur condimentum dolor sapien, vel semper mauris ullamcorper porta. Mauris id quam vel lacus pretium consequat vel in enim. In massa libero, lobortis nec ullamcorper sit amet, cursus sed magna. Praesent convallis est vitae nunc pellentesque, quis auctor lectus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel congue enim, vestibulum feugiat magna. Quisque commodo molestie purus id vulputate. Phasellus a nibh convallis, pellentesque nulla vitae, auctor ipsum. Morbi lacinia posuere tortor vitae scelerisque. Morbi a nulla auctor, rutrum mi at, condimentum enim.
                </p>
                <p>
Nam quis porttitor quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget vehicula ante, id elementum ex. Maecenas faucibus sem tortor, sed tempor sem condimentum et. Nam tellus lorem, interdum sed ipsum at, laoreet tincidunt libero. Praesent elementum id justo quis ullamcorper. Nulla quis varius mi, sed feugiat felis. Nam eu nulla tempor, auctor nisl quis, feugiat ligula. Praesent faucibus nec nulla ut venenatis. Etiam sodales nibh nibh, non pharetra felis euismod a. Morbi porttitor tortor vel enim ultrices consequat. Integer vel suscipit ligula. In ultrices orci vel justo maximus, eget ultricies risus imperdiet.
                </p>
                <p>
Vivamus dapibus lectus leo. Ut et arcu aliquam, vehicula diam eget, pretium urna. Praesent mollis vulputate eleifend. Ut mattis massa et nunc auctor, a feugiat risus congue. In justo nunc, lobortis nec ultricies a, scelerisque et ante. Fusce lobortis euismod ante vel iaculis. Ut dolor ligula, auctor efficitur porttitor sit amet, luctus sed turpis. Nunc fermentum magna eu nibh efficitur, eleifend elementum urna efficitur. Mauris porta justo pellentesque velit mollis tincidunt. Vestibulum in nunc sapien. Pellentesque euismod pulvinar nisl. Donec ultrices commodo ligula non finibus. Aenean vel tincidunt eros. Praesent vehicula malesuada sem vitae mollis. Aliquam erat volutpat. Praesent condimentum ultrices ex at ultricies.
                </p>
                <p>
In ac tellus maximus, pharetra neque et, varius urna. Nunc scelerisque massa sit amet condimentum venenatis. Praesent maximus sodales euismod. Maecenas tristique, turpis id vehicula varius, urna velit facilisis ipsum, a dictum lectus turpis vehicula nulla. Quisque ipsum dui, posuere sed mauris a, egestas condimentum dui. Praesent efficitur consectetur consectetur. Sed eu arcu nec lectus auctor suscipit quis ut augue. Quisque feugiat, ligula eu fringilla faucibus, lectus libero ornare lectus, in bibendum felis turpis eleifend tortor. Aenean ultrices lobortis risus ut tristique. Quisque a odio eget tortor imperdiet porttitor. Nulla eu lectus nec quam facilisis hendrerit id vitae magna. Proin elementum neque ipsum, at pulvinar ex tincidunt id. Aliquam eget elit vitae eros accumsan accumsan et eu est. In ut urna dui. Curabitur et lorem ac velit feugiat fermentum.
                </p>
            </Page>
        );
    }
}

PageFactory.register(ThisPage, "/about/us", "About Us", "About");
