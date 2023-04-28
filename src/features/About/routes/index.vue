<template>
    <button @click="send('TOGGLE')">
        {{ state.value === 'inactive' ? 'Click to activate' : 'Active! Click to deactivate' }}
    </button>
</template>

<script lang="ts">
import { createMachine } from 'xstate';

const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
        inactive: {
            on: { TOGGLE: 'active' },
        },
        active: {
            on: { TOGGLE: 'inactive' },
        },
    },
});

export default {
    setup() {
        const { state, send } = useMachine(toggleMachine);
        return {
            state,
            send,
        };
    },
};
</script>
