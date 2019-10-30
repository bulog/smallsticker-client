import React from 'react';
import styled from '@emotion/styled';
import OpenIssues from './OpenIssues';
import { MdLock } from 'react-icons/md';

import UserContext from '../../context/UserContext';
import { Heading, Text } from './AreaTypography';

import {
  colors,
  badgeThemes,
  fonts,
  radius,
  spacing,
  animations
} from '../../utils/styles';

const ContentForContributorRoot = styled(`div`)`
  animation: ${animations.simpleEntry};
`;

const CodeBadgeBox = styled(`div`)`
  margin: ${spacing.xl}px 0;
  text-align: center;
`;

const CodeBadge = styled(`div`)`
  border-radius: ${radius.large}px;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.heading};
  overflow: hidden;
`;

const Name = styled(`span`)`
  background: ${props =>
    badgeThemes[props.code]
      ? badgeThemes[props.code].backgroundTheme
      : colors.brand};
  color: ${props =>
    badgeThemes[props.code] ? badgeThemes[props.code].textTheme : colors.brand};
  font-size: 1.1rem;
  padding: ${spacing.xs}px;
`;

const Code = styled(`span`)`
  background: ${colors.lightest};
  color: ${colors.brand};
  font-size: 1.5rem;
  padding: ${spacing['2xs']}px;
`;

const Used = styled(`span`)`
  align-items: center;
  background: ${colors.brandDarker};
  color: ${colors.brandBright};
  display: flex;
  font-size: 1.1rem;
  justify-content: center;
  padding: ${spacing.xs}px;

  svg {
    color: red;
    margin-left: ${spacing.xs}px;
  }
`;

const Tip = styled(`p`)`
  color: ${colors.brandBright};
  font-size: 0.85rem;
  line-height: 1.2;
  margin: 0;
  padding-top: ${spacing.xs}px;
`;

const ProgressBarContainer = `
  border: 0;
  width: 100%;
  border-radius: 1rem;
  background-color: ${colors.brandDarker};
  height: 1.6rem;
`;

const ProgressIndicator = `
  border: 0;
  width: 100%;
  border-radius: 1rem 0 0 1rem;
  background-color: ${colors.lemon};
  transition: width 1s;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 75%,
    transparent 75%,
    transparent,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 75%,
    transparent 75%,
    transparent
  );
`;

const ProgressBar = styled(`progress`)`
  ${ProgressBarContainer}

  ::-webkit-progress-bar {
    ${ProgressBarContainer}
  }

  ::-webkit-progress-value {
    ${ProgressIndicator}
  }

  ::-ms-fill {
    ${ProgressIndicator}
  }
  ::-moz-progress-bar {
    ${ProgressIndicator}
  }
`;

const LockIcon = styled(MdLock)`
  font-size: 2rem;
  padding-top: 0.4rem;
`;

const ContentForContributor = () => (
  <UserContext.Consumer>
    {({ contributor }) => {
      return (
        <ContentForContributorRoot>
          <Heading>谢谢您的支持！</Heading>
          <Text>
            因为有您，开源社区更美好，您有 <strong>{contributor.length}</strong>{' '}
            个订单
          </Text>
          <OpenIssues issues={contributor} />
        </ContentForContributorRoot>
      );
    }}
  </UserContext.Consumer>
);

export default ContentForContributor;
