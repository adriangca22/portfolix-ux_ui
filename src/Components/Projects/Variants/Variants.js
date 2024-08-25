export const overlayVariant = {
    hide: {
        scaleY: 0
    },
    show: {
        scaleY: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.4,
            when: 'beforeChildren'
        },
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.4,
            when: 'beforeChildren'
        },
    }
}

export const buttonVariant = {
    hide: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    }
} 