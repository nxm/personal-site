import ActivityStatus from "@/components/ui/ActivityStatus";
import Badge, { BadgeVariant } from "@/components/ui/Badge";
import SpotifyPlayer from "@/components/ui/SpotifyPlayer";
import Image from "next/image";
import instagramIcon from "@/public/icons/instagram.svg";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import GithubIcon from "@/assets/icons/GithubIcon";
import TwitterXIcon from "@/assets/icons/TwitterXIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import MailIcon from "@/assets/icons/MailIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-2">
      <div className="z-10 max-w-5xl w-full items-center justify-center gap-10 font-mono text-sm lg:flex">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <h1 className="inline-block text-4xl font-bold text-center">
              Jakub Szturomski
            </h1>
            <ActivityStatus status="active" />
          </div>

          <p className="text-center">Software engineer</p>

          <div className="block mt-3">
            <p>
              Experienced with <strong>blockchain</strong> and{" "}
              <strong>security</strong> technologies.
            </p>

          </div>

          <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center ml-2">
              <Badge variant={BadgeVariant.primary}>Go</Badge>
              <Badge variant={BadgeVariant.primary}>Rust</Badge>
              <Badge variant={BadgeVariant.primary}>Solidity</Badge>
              <Badge variant={BadgeVariant.primary}>React</Badge>
              <Badge variant={BadgeVariant.primary}>Python</Badge>
              <Badge variant={BadgeVariant.primary}>Java</Badge>
            </div>

            <div className="flex flex-wrap justify-center ml-2">
              <Badge variant={BadgeVariant.secondary}>Reverse engineering</Badge>
              <Badge variant={BadgeVariant.secondary}>Blockchain</Badge>
              <Badge variant={BadgeVariant.secondary}>Security</Badge>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <div className="flex flex-wrap justify-center gap-2 ml-2">
              <a
                href="https://instagram.com/x86/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="fill-white hover:fill-pink-700" />
              </a>
              <a
                href="https://github.com/nxm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="fill-white hover:fill-sky-600" />
              </a>
              <a
                href="https://twitter.com/0xkuba_eth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterXIcon className="fill-white hover:fill-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/nxm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="fill-white hover:fill-blue-400" />
              </a>
              <a
                href="mailto:szturomski@jakub.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon className="stroke-white hover:stroke-indigo-700" />
              </a>
            </div>
          </div>

          {/* <div className="flex justify-center mt-2"> */}
          {/* <SpotifyPlayer className="w-full" /> */}
          {/* </div> */}
        </div>

        <div className="max-[600px]:hidden flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <Image
              src="/avatar.jpg"
              alt="Jakub Szturomski"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">From: Gdynia, Poland 🇵🇱</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-7"></div>
    </main>
  );
}
