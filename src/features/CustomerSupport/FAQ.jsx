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
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Can I create more that one account?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            How can I subscribe to monthly newsletter?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="1">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="2">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item className={classes.item} value="3">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
