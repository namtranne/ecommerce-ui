import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./faq.module.css";

const placeholder = (
  <div className="w-full px-[16px]">
    <p className="text-sm break-words">
      "It can’t help but hear a pin drop from over half a mile away, so it lives
      deep in the mountains where there aren’t many people or Pokémon.It was
      born from sludge on the ocean floor. In a sterile environment, the germs
      within its body can’t multiply, and it dies.It has no eyeballs, so it
      can’t see. It checks its surroundings via the ultrasonic waves it emits
      from its mouth.";
    </p>
  </div>
);

export default function FAQ() {
  return (
    <div className="w-[700px] pb-8">
      <div className="my-4">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>
      </div>

      <Accordion
        chevronPosition="right"
        // defaultValue="reset-password"
        chevronSize={26}
        variant="separated"
        disableChevronRotation
        styles={{
          label: { color: "var(--mantine-color-black)" },
          item: { border: 0 },
        }}
        chevron={
          <ThemeIcon radius="xl" className={classes.gradient} size={26}>
            <IconPlus
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ThemeIcon>
        }
      >
        <Accordion.Item className={classes.item} value="introduction">
          <Accordion.Control>What is G5Tech?</Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                G5Tech is a dropshipping vendor that provides a wide range of
                technology product. We offer a variety of products and services
                to help you with your IT needs. Our products include laptops,
                desktops, monitors, and more. We also offer services such as IT
                consulting, network design, and more. Our goal is to provide you
                with the best products and services to help you with your IT
                needs.
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Can I create more that one account?
          </Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                One account is associated with one email address and a phone
                number. You can create multiple accounts with different email
                addresses and phone numbers. However, you cannot use the same
                email address to create multiple accounts.
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            How can I reset my password?
          </Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                If you are logged in, you can reset your password by clicking on
                your user name in the top right corner of the page. Then, click
                on the "Change Password" button on the panel. If you are not
                logged in, you can reset your password by clicking on the "Login"
                button on the navigation bar and then click on the "Forgot your
                password?" link.
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to latest updates?
          </Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                On the navigation bar, click on the "Contact" button and it will
                navigate you to the footer. There is a field where you can enter
                your email address and click on the "Subscribe" button for our
                latest updates.
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                Right now, we are only working with VNPay or COD method. We are
                working on adding more payment systems in the future.
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="shipment">
          <Accordion.Control>
            How long does it take for my order to be shipped?
          </Accordion.Control>
          <Accordion.Panel>
            <div className="w-full px-[16px]">
              <p className="text-sm break-words">
                It depends on the product you ordered and your location. We will
                provide you with an estimated delivery date when you place your
                order. You can also track your order on our website. (Note: This
                feature is not available yet)
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
