<template>
    <div class="typing-container">
        <h1 :class="['d-flex', { 'gap-2': isTextComplete }]">
            <span class="typing-text">
                {{ textPart1 }}
                {{ displayedText }}
            </span>
            <span class="cursor"></span>
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        textPart1: {
            type: String,
            required: true
        },
        textPart2: {
            type: String,
            required: true
        },
        textPart3: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            displayedText: '',
            fullText: '',
            index: 0,
            isDeleting: true,
            partIndex: 0,
            parts: []
        };
    },
    computed: {
        isTextComplete() {
            const currentPart = this.parts[this.partIndex];
            if (!currentPart) return false; 
            return this.displayedText.length === currentPart.length && !this.isDeleting;
        }
    },
    watch: {
        textPart2(){
            this.parts = [this.textPart2, this.textPart3];
        },
        textPart3(){
            this.parts = [this.textPart2, this.textPart3];
        }
    },
    mounted() {
        this.initializeParts();
        setTimeout(this.type, 1000); 
    },
    methods: {
        initializeParts() {
            this.parts = [this.textPart2, this.textPart3];
            this.displayedText = this.parts[this.partIndex];
            this.index = this.parts[this.partIndex].length;
            this.isDeleting = true;
            this.partIndex = 0;
        },
        type() {
            const currentPart = this.parts[this.partIndex];

            if (this.isDeleting) {
                this.displayedText = currentPart.substring(0, this.index--);
                if (this.index < 0) {
                    this.isDeleting = false;
                    this.partIndex = (this.partIndex + 1) % this.parts.length;
                    this.index = 0;
                }
            } else {
                this.displayedText = currentPart.substring(0, this.index++);
                if (this.index > currentPart.length) {
                    this.isDeleting = true;
                    setTimeout(() => this.type(), 1500);
                    // Usciamo dalla funzione Type e dopo si libera stack e parte setTimeout
                    return;
                }
            }

            setTimeout(() => this.type(), this.isDeleting ? 30 : 20); 
        }
    }
};
</script>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.typing-container {
    text-align: center;
    color: $color_02;
}

.typing-text {
    font-weight: bolder;
    font-size: 20px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.1s ease-in-out;
}

.cursor {
    display: inline-block;
    width: 2px;
    vertical-align: bottom;
    animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
        background-color: transparent;
    }

    50% {
        border-color: $color_02;
        background-color: $color_02;
    }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
    .typing-text{
        font-size: 36px;
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    .typing-text{
        font-size: 42px;
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) {}
</style>
