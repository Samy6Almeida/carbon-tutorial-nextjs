'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Design & build with Carbon</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
            <Tab>Lyrics</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">What is Carbon?</h2>
                  <p className="landing-page__p">
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              [Intro]
              <br />
              It's been a while
              <br />
              I know I shouldn't have kept you waiting
              <br />
              But I'm here now
              <br />
              <br />
              [Verse 1]
              <br />
              I know it's been a while, but I'm glad you came
              <br />
              And I've been thinking 'bout how you say my name
              <br />
              You got my body spinning like a hurricane
              <br />
              And it feels like you got me going insane
              <br />
              And I can't get enough, so let me get it up
              <br />
              <br />
              [Pre-Chorus]
              <br />
              Ooh, looks like we're alone now
              <br />
              You ain't gotta be scared, we're grown now
              <br />
              I'ma hit defrost on ya, let's get it blazin'
              <br />
              We can turn the heat up if you wanna
              <br />
              Turn the lights down low if you wanna
              <br />
              Just wanna move you, but you froze up
              <br />
              That's what I'm saying
              <br />
              <br />
              [Chorus]
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              <br />
              [Interlude]
              <br />
              So are you warming up yet?
              <br />
              <br />
              [Verse 2]
              <br />
              You got me hypnotized, I never felt this way
              <br />
              You got my heart beating like an 808
              <br />
              Can you rise to the occasion?
              <br />
              I'm patiently waiting 'cause it's getting late
              <br />
              And I can't get enough, so let me get it up
              <br />
              [Pre-Chorus]
              <br />
              Ooh, looks like we're alone now
              <br />
              You ain't gotta be scared, we're grown now
              <br />
              I'ma hit defrost on ya, let's get it blazin'
              <br />
              We can turn the heat up if you wanna
              <br />
              Turn the lights down low if you wanna
              <br />
              Just wanna move you, but you froze up
              <br />
              That's what I'm saying
              <br />
              [Chorus]
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              <br />
              [Interlude]
              <br />
              I like this part, oh
              <br />
              It feels kinda good
              <br />
              Yeah
              <br />
              <br />
              [Chorus]
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Oh, baby, I can make you feel hot, hot, hot, hot
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              <br />
              [Instrumental Break]
              <br />
              <br />
              [Chorus]
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              Let me break the ice
              <br />
              Allow me to get you right
              <br />
              Once you warm up to me
              <br />
              Baby, I can make you feel hot, hot, hot, hot
              <br />
              <br />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Open
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Modular
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Consistent
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
