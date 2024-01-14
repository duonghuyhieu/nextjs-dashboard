import AcmeLogo from '@/app/ui/acme-logo';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
    return (
        // These are Tailwind classes:
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                {/* Add Hero Images Here */}
                <Image
                    src="/hero-desktop.png"
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
            </div>
        </main>
    )
}
