<template>
    <Stepper value = '1'>
        <StepItem v-for="(title, index) in moduleContent.title" :key="index" :value="index" >
            <Step> Module {{ index+1 }}</Step>
            <StepPanel> 
              <p>{{ moduleContent.content[index] }}</p>  
              <div class="flex py-6 gap-2">
                <Button v-if="index != 1" label="Back" severity="secondary" @click="activateCallback('1')" />
                <Button label="Next" @click="activateCallback('3')" />
            </div>
            </StepPanel>
        </StepItem>
    </Stepper>
</template>

<script setup>
import { StepList, Stepper } from 'primevue';
import moduleContent from '@/assets/Module1.json';

</script>

