window.addEventListener('load', function() {
    const buttonIntroOneCircle1Svg = document.querySelector(".for-button-hover-svg--intro-1")
    const buttonIntroOneCircle1 = document.querySelector(".about-us__right-side-read-more-circle--intro-1")
    const buttonIntroOne = document.querySelector(".about-us__right-side-read-more--intro-1")

    const buttonIntroTwoCircle2Svg = document.querySelector(".for-button-hover-svg--intro-2")
    const buttonIntroTwoCircle2 = document.querySelector(".about-us__right-side-read-more-circle--intro-2")
    const buttonIntroTwo = document.querySelector(".about-us__right-side-read-more--intro-2")

    const buttonIntroThreeCircle3Svg = document.querySelector(".for-button-hover-svg--intro-3")
    const buttonIntroThreeCircle3 = document.querySelector(".about-us__right-side-read-more-circle--intro-3")
    const buttonIntroThree = document.querySelector(".about-us__right-side-read-more--intro-3")

// ONE SLIDE
    buttonIntroOneCircle1Svg.onmousemove = (e) => {
        let x
        let y

        if (window.innerWidth > 1024) {
            x = e.pageX - buttonIntroOne.offsetLeft - buttonIntroOne.offsetParent.offsetLeft
            y = e.pageY - buttonIntroOne.offsetTop - 65
        }

        if (window.innerWidth <= 1070) {
            x = e.pageX - buttonIntroOne.offsetLeft
            y = e.pageY - buttonIntroOne.offsetTop - 65
        }

        buttonIntroOneCircle1.style.setProperty('--x', `${ x }px`)
        buttonIntroOneCircle1.style.setProperty('--y', `${ y }px`)
        buttonIntroOneCircle1.classList.add("about-us__right-side-read-more-circle--active")
    }
    buttonIntroOneCircle1Svg.addEventListener("mouseleave", () => {
        buttonIntroOneCircle1.classList.remove("about-us__right-side-read-more-circle--active")
    })
// TWO SLIDE
    buttonIntroTwoCircle2Svg.onmousemove = (e) => {
        const x = e.pageX - buttonIntroTwo.offsetLeft - buttonIntroTwo.offsetParent.offsetLeft
        const y = e.pageY - buttonIntroTwo.offsetTop - 65

        buttonIntroTwoCircle2.style.setProperty('--x', `${ x }px`)
        buttonIntroTwoCircle2.style.setProperty('--y', `${ y }px`)
        buttonIntroTwoCircle2.classList.add("about-us__right-side-read-more-circle--active")
    }
    buttonIntroTwoCircle2Svg.addEventListener("mouseleave", () => {
        buttonIntroTwoCircle2.classList.remove("about-us__right-side-read-more-circle--active")
    })
// THREE SLIDE
    buttonIntroThreeCircle3Svg.onmousemove = (e) => {
        const x = e.pageX - buttonIntroThree.offsetLeft - buttonIntroThree.offsetParent.offsetLeft
        const y = e.pageY - buttonIntroThree.offsetTop - 65

        buttonIntroThreeCircle3.style.setProperty('--x', `${ x }px`)
        buttonIntroThreeCircle3.style.setProperty('--y', `${ y }px`)
        buttonIntroThreeCircle3.classList.add("about-us__right-side-read-more-circle--active")
    }
    buttonIntroThreeCircle3Svg.addEventListener("mouseleave", () => {
        buttonIntroThreeCircle3.classList.remove("about-us__right-side-read-more-circle--active")
    })
})